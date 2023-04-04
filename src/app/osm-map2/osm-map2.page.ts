import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import * as L from 'leaflet';
import {antPath} from 'leaflet-ant-path';


@Component({
  selector: 'app-osm-map2',
  templateUrl: './osm-map2.page.html',
  styleUrls: ['./osm-map2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OsmMap2Page implements OnInit {

  map: L.Map | undefined;

  greenIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2017/2017809.png',
    iconSize:     [50, 50], // size of the icon
  });

  constructor() {
  }

  ngOnInit() {
    console.log('TEST');
    this.leafletMap();
  }

  leafletMap() {
    this.map = L.map('mapId').setView([48.74146661353846, 9.316857007380438], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(this.map);
    this.map.invalidateSize();
    window.dispatchEvent(new Event('resize'));
    /*L.marker([48.74494079278616, 9.32190382917665], {icon: this.greenIcon}).addTo(this.map).bindPopup('Delhi');
    L.marker([48.73848995276122, 9.31277376165469], {icon: this.greenIcon}).addTo(this.map).bindPopup('Leh');*/

    /*antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
      {color: '#FF0000', weight: 5, opacity: 0.6})
      .addTo(this.map);*/
  }

}
