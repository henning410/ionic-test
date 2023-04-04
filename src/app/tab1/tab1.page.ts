import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {Tab2Page} from "../tab2/tab2.page";
import {OsmMapPage} from "../osm-map/osm-map.page";
import {OsmMap2Page} from "../osm-map2/osm-map2.page";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, Tab2Page, OsmMap2Page],
})
export class Tab1Page {
  constructor() {}
}
