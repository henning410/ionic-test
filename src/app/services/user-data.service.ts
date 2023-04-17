import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {GeoLocation} from "../models/location.model";
import {Geolocation} from "@capacitor/geolocation";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  currentUserLocation: BehaviorSubject<GeoLocation>;

  constructor() {
    //Default set user location to center of Stuttgart
    this.currentUserLocation = new BehaviorSubject<GeoLocation>({
      latitude: 48.80308352215288,
      longitude: 9.198073272217787
    });
  }

  getCurrentLocation(): Observable<GeoLocation> {
    return this.currentUserLocation.asObservable();
  }

  async setLocation() {
    const coordinates = await Geolocation.getCurrentPosition({enableHighAccuracy: true});
    this.currentUserLocation.next({latitude: coordinates.coords.latitude, longitude: coordinates.coords.longitude})
    console.log('Current Long: ', coordinates.coords.longitude, ' | Current Lat: ', coordinates.coords.latitude);
  }

}
