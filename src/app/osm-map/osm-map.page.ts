import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import * as Leaflet from 'leaflet';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

Leaflet.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-osm-map',
  templateUrl: './osm-map.page.html',
  styleUrls: ['./osm-map.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LeafletModule]
})
export class OsmMapPage {
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
    zoom: 50,
    center: { lat: 28.626137, lng: 79.821603 }
  }

  initMarkers() {
    const initialMarkers = [
      {
        position: { lat: 28.625485, lng: 79.821091 },
        draggable: false
      },
      {
        position: { lat: 28.625293, lng: 79.817926 },
        draggable: false
      },
      {
        position: { lat: 28.625182, lng: 79.81464 },
        draggable: false
      }
    ];
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`<h3>Username: Hans</h3><h4>Preis pro kwh: 2.76€</h4><br><ion-icon name="star" size="large"></ion-icon><ion-icon name="star" size="large"></ion-icon><ion-icon name="star" size="large"></ion-icon><ion-icon name="star-outline" size="large"></ion-icon><ion-icon name="star-outline" size="large"></ion-icon><b>${data.position.lat},  ${data.position.lng}</b>`);
      this.map.panTo(data.position);
      this.markers.push(marker)
    }
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.map.setView([51.505, -0.09], 13);
    this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  }
}
