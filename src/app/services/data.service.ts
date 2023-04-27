import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage-angular";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = environment.api_url;
  constructor(private http: HttpClient, private router: Router) {
  }

  getAllEvcs() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('responseType', 'application/json')
      .set('Authorization',  'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhlbm5pbmcxIiwiZW1haWwiOiJoZW5uaW5nMS53ZWlzZUB3ZWIuZGUiLCJzdWIiOiIxIiwiaWF0IjoxNjgyNjA5MDg3LCJleHAiOjE2ODI2MDk0NDd9.k_wnVjWn53T1wj47QnxnPsD7aQyg74nYoNTo8pt9a74');
    return this.http.get<any>(this.url + '/evcs',{headers: headers} )
  }
}
