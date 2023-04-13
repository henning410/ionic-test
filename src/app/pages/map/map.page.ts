import {Component} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {ExploreContainerComponent} from '../../explore-container/explore-container.component';
import {AddWallboxPage} from "../addWallbox/addWallbox.page";
import {OsmMap2Page} from "../../osm-map2/osm-map2.page";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, AddWallboxPage, OsmMap2Page, HttpClientModule, CommonModule, FormsModule],
})
export class MapPage {
  result = ""
  selectedLocation = null;
  config: any = null;

  constructor(private http: HttpClient) {
  }

  handleChange(event: any) {
    console.log('CHANGE INPUT');
    this.showConfig();
    this.result = event.target.value.toLowerCase();
  }

  showConfig() {
    this.getRequest()
      .subscribe((data: any) => this.config = data.features);
  }

  getRequest() {
    return this.http.get<JSON>('https://nominatim.openstreetmap.org/search?city=' + this.result +'&format=geojson');
  }

  itemSelected(item: any) {
    this.config = [];
    this.result = item.properties.display_name;
    this.selectedLocation = item;
  }
}

