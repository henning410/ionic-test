import {Component} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {AddWallboxPage} from "../addWallbox/addWallbox.page";
import {OsmMap2Page} from "../../osm-map2/osm-map2.page";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Geolocation} from '@capacitor/geolocation';
import {UserDataService} from "../../services/user-data.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss'],
  standalone: true,
  imports: [IonicModule, AddWallboxPage, OsmMap2Page, HttpClientModule, CommonModule, FormsModule],
})
export class MapPage {
  typedSearch = ""
  selectedLocation = null;
  searchResults: any = null;
  evcs = [];

  constructor(private http: HttpClient, private userDataService: UserDataService, private dataService: DataService) {
  }

  handleChange() {
    console.log('INPUT CHANGED');
    this.showConfig();
  }

  ionViewWillEnter() {
    this.dataService.getAllEvcs().subscribe((evcs:any) => {
      console.log('All EVCS: ', evcs)
      this.evcs = evcs;
    });
  }

  showConfig() {
    this.getRequest().subscribe((data: any) => this.searchResults = data.features);
  }

  getRequest() {
    return this.http.get<JSON>('https://nominatim.openstreetmap.org/search?city=' + this.typedSearch + '&format=geojson');
  }

  async itemSelected(item: any) {
    this.searchResults = [];
    this.typedSearch = item.properties.display_name;
    this.selectedLocation = item;
  }

  async setCurrentPosition() {
    await this.userDataService.setLocation();
  }
}

