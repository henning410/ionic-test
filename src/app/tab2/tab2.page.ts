import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {Tab1Page} from "../tab1/tab1.page";
import {MarkerPopupComponent} from "../marker-popup/marker-popup.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, Tab1Page, MarkerPopupComponent]
})
export class Tab2Page {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete'
      }
    },
    {
      text: 'Share',
      data: {
        action: 'share'
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel'
      }
    }
  ];
  constructor() {}

}
