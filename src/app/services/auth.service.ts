import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import {BehaviorSubject, from, map, Observable, switchMap, take, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import { Storage } from '@ionic/storage-angular';

const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt-token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<any> = new BehaviorSubject(null);
  private userData = new BehaviorSubject(null);
  url = environment.api_url;

  constructor(private http: HttpClient, private plt: Platform, private router: Router, private storage: Storage) {
    this.loadStoredToken()
    this.storage.create();
  }

  loadStoredToken() {
    let platformObs = from(this.plt.ready());
    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get(TOKEN_KEY))
      }),
      map((token: any) => {
        console.log('Token from Storage: ', token);
        if (token) {
          let decoded = helper.decodeToken(token);
          console.log('Decoded: ', decoded);
          this.userData.next(decoded);
          return true;
        } else {
          return null;
        }
      })
    );
  }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(this.url + '/auth/login', {
      username: credentials.username,
      password: credentials.password
    }).pipe(
      take(1),
      map((res: any) => {
        console.log('Response from login backend: ', res.access_token);
        return res.access_token
      }),
      switchMap((token: any) => {
        let decoded = helper.decodeToken(token);
        console.log('Decoded: ', decoded);
        this.userData.next(decoded);

        let storageObs = from(this.storage.set(TOKEN_KEY, token));
        return storageObs;
      })
    )
  }

  register(credentials: {username: string, email: string, password: string, verifyPassword: string}): Observable<any> {
    console.log('Create post request witH: ', credentials);
    console.log('URL: ', this.url + 'users/register');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('responseType', 'application/json')
      .set('Authorization',  'Bearer ' + 'MY_TOKEN');
    return this.http.post<any>(this.url + '/users/register', credentials,  {headers: headers} )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getUser() {
    return this.userData.getValue();
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.router.navigateByUrl('/');
      this.userData.next(null)
    })
  }

}
