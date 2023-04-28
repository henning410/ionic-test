import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = environment.api_url;
  constructor(private http: HttpClient) {
  }

  getAllEvcs() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('responseType', 'application/json')
      .set('Authorization',  'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhlbm5pbmcxIiwiZW1haWwiOiJoZW5uaW5nMS53ZWlzZUB3ZWIuZGUiLCJzdWIiOiIxIiwiaWF0IjoxNjgyNjc2NjM3LCJleHAiOjE2ODI2Nzc1Mzd9.w3uYZN1hNJCFV5RkJMmmjvgdkVNpyylPwo9cEOVZebY');
    return this.http.get<any>(this.url + '/evcs',{headers: headers} )
  }
}
