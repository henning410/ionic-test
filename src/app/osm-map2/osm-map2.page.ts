import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import * as L from 'leaflet';
import {antPath} from 'leaflet-ant-path';
import {MarkerPopupComponent} from "../marker-popup/marker-popup.component";
import {Router, RouterModule} from "@angular/router";
import {GeoSearchControl, OpenStreetMapProvider} from "leaflet-geosearch";

@Component({
  selector: 'app-osm-map2',
  templateUrl: './osm-map2.page.html',
  styleUrls: ['./osm-map2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MarkerPopupComponent, RouterModule]
})
export class OsmMap2Page implements OnInit, OnChanges {
  @Input() selectedLocation: any;

  map: L.Map | undefined;
  lat: number = 0;
  long: number = 0;

  greenIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2017/2017809.png',
    iconSize: [40, 40], // size of the icon
  });

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.getLocation();
  }

  ngOnChanges(changes: any) {
    if (this.selectedLocation !== null) {
      console.log('CHANGE: ', this.selectedLocation.geometry.coordinates[0]);
      /*L.marker([this.selectedLocation.geometry.coordinates[1], this.selectedLocation.geometry.coordinates[0]], {icon: this.greenIcon}).addTo(this.map!);*/
      this.map!.setView([this.selectedLocation.geometry.coordinates[1], this.selectedLocation.geometry.coordinates[0]], 15);
    }
  }

  leafletMap() {
    let content = `
    <h3>Username: Hans</h3>
    <h4>Preis pro kwh: 2.76€</h4>
    <br>
    <ion-icon name="star" size="large"></ion-icon>
    <ion-icon name="star" size="large"></ion-icon>
    <ion-icon name="star" size="large"></ion-icon>
    <ion-icon name="star-outline" size="large"></ion-icon>
    <ion-icon name="star-outline" size="large"></ion-icon>
    <hr style="height:2px;border-width:0;color:gray;background-color:gray">
    <div style="display: flex; justify-content: center">
        <ion-button id="open-action-sheet">Reservieren</ion-button>
    </div>
    <app-marker-popup></app-marker-popup>
    `

    console.log("Latitude: " + this.long +
      "Longitude: " + this.lat);
    this.map = L.map('mapId').setView([this.lat, this.long], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(this.map);
    this.map.invalidateSize();
    window.dispatchEvent(new Event('resize'));
    L.marker([48.74494079278616, 9.32190382917665], {icon: this.greenIcon}).addTo(this.map).bindPopup(content).on('click', (event) => this.test());
    L.marker([48.73848995276122, 9.31277376165469], {icon: this.greenIcon}).addTo(this.map).bindPopup(content);
    L.marker([48.73532949058122, 9.320567098646743], {icon: this.greenIcon}).addTo(this.map).bindPopup(`<app-marker-popup></app-marker-popup>`);


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

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
          if (position) {
            console.log("Latitude: " + position.coords.latitude +
              "Longitude: " + position.coords.longitude);
            this.lat = position.coords.latitude;
            this.long = position.coords.longitude;
            this.leafletMap();
          }
        },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }

  }

  test() {
    console.log('HUHU');
  }

}
