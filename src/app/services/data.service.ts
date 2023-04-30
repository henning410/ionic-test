import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Storage} from "@ionic/storage-angular";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = environment.api_url;
  private allEvcs = new BehaviorSubject([]);

  constructor(private http: HttpClient, private storage: Storage) {
  }

  async setAllEvcs() {
    let token = '';
    this.allEvcs.next([]);
    await this.storage.get('jwt-token').then(key => {
      token = key;
    })
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('responseType', 'application/json')
      .set('Authorization',  'Bearer ' + token);
    this.http.get<any>(this.url + '/evcs',{headers: headers}).subscribe(evcs => {
      this.allEvcs.next(evcs);
    })
  }

  getAllEvcs() {
    return this.allEvcs;
  }
}
