import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import {MapPage} from "../map/map.page";
import {Step1Component} from "../../step1/step1.component";

@Component({
  selector: 'app-addWallbox',
  templateUrl: 'addWallbox.page.html',
  styleUrls: ['addWallbox.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, MapPage]
})
export class AddWallboxPage {
  component = Step1Component;

  constructor() {}

}
