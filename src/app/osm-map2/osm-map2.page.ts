import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import * as L from 'leaflet';
import {antPath} from 'leaflet-ant-path';
import {Router, RouterModule} from "@angular/router";
import {GeoSearchControl, OpenStreetMapProvider} from "leaflet-geosearch";
import {GeoLocation} from "../models/location.model";
import {UserDataService} from "../services/user-data.service";

@Component({
  selector: 'app-osm-map2',
  templateUrl: './osm-map2.page.html',
  styleUrls: ['./osm-map2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class OsmMap2Page implements OnInit, OnChanges {
  @Input() selectedLocation: any;

  map: L.Map | undefined;
  currentUserLocation: GeoLocation = {latitude: 48.80308352215288, longitude: 9.198073272217787}

  evcsIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2017/2017809.png',
    iconSize: [40, 40], // size of the icon
  });

  homeIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1243/1243945.png?w=740&t=st=1681553821~exp=1681554421~hmac=ecdbb2589b146e8cfe2abdd1b348b363f67029668d08f7aeb7cb8d996d5738b4',
    iconSize: [40, 40], // size of the icon
  });

  constructor(public router: Router, private userDataService: UserDataService) {
  }

  ngOnInit() {
    //Subscribe to current user location
    this.userDataService.getCurrentLocation().subscribe((value) => {
      this.currentUserLocation = value;
      console.log('CHANGED: ', value);
      //When map is loaded, set view to current lat/long and set zoom value
      if (this.map) {
        this.map.setView([this.currentUserLocation.latitude, this.currentUserLocation.longitude], 17);
        L.marker([this.currentUserLocation.latitude, this.currentUserLocation.longitude], {icon: this.homeIcon}).addTo(this.map);
      }
    })
    this.loadMap();
  }

  // When Location in search bar is selected
  ngOnChanges(changes: any) {
    if (this.selectedLocation !== null) {
      console.log('CHANGE: ', this.selectedLocation.geometry.coordinates[0]);
      /*L.marker([this.selectedLocation.geometry.coordinates[1], this.selectedLocation.geometry.coordinates[0]], {icon: this.greenIcon}).addTo(this.map!);*/
      this.map!.setView([this.selectedLocation.geometry.coordinates[1], this.selectedLocation.geometry.coordinates[0]], 15);
    }
  }

  loadMap() {
    let content = `
    <ion-chip style="background-color: lightblue; color: black">
        <ion-avatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <ion-label>Max Müller</ion-label>
    </ion-chip>
    <p><span style="font-weight: bold">Preis pro kwh: </span> 2.76€</p>
    <p><span style="font-weight: bold">Besonderheiten: </span> Bei dieser Ladesäule ist ein überdachter Stellplatz inklusive! Aud den Stellplatz passen Autos mit maximaler Länge von 4,5m</p>
    <br>
    <div style="display: flex;">
      <ion-icon name="star" size="large"></ion-icon>
      <ion-icon name="star" size="large"></ion-icon>
      <ion-icon name="star" size="large"></ion-icon>
      <ion-icon name="star-outline" size="large"></ion-icon>
      <ion-icon name="star-outline" size="large"></ion-icon>
    </div>
    <hr style="height:2px;border-width:0;color:gray;background-color:gray">
    <div style="display: flex; justify-content: center">
        <ion-button id="open-action-sheet">Reservieren</ion-button>
    </div>
    <app-marker-popup></app-marker-popup>
    `

    this.map = L.map('mapId').setView([this.currentUserLocation.latitude, this.currentUserLocation.longitude], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(this.map);
    this.map.invalidateSize();
    window.dispatchEvent(new Event('resize'));  //prevent loading bug in ionic
    L.marker([48.74494079278616, 9.32190382917665], {icon: this.evcsIcon}).addTo(this.map).bindPopup(content, {className: 'test'}).on('click', (event) => this.test());
    L.marker([48.73848995276122, 9.31277376165469], {icon: this.evcsIcon}).addTo(this.map).bindPopup(content);
    L.marker([48.73532949058122, 9.320567098646743], {icon: this.evcsIcon}).addTo(this.map).bindPopup(`<app-marker-popup></app-marker-popup>`);


    //center marker when popup opens
    this.map.on('popupopen', (e) => {
      var px = this.map!.project(e.target._popup._latlng); // find the pixel location on the map where the popup anchor is
      px.y -= e.target._popup._container.clientHeight / 2; // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
      this.map!.panTo(this.map!.unproject(px), {animate: true}); // pan to new center
    });

    /*antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
      {color: '#FF0000', weight: 5, opacity: 0.6})
      .addTo(this.map);*/
  }

  test() {
    console.log('HUHU');
  }

}
