import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-wallet',
  templateUrl: 'wallet.page.html',
  styleUrls: ['wallet.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, RouterModule],
})
export class WalletPage {
  constructor() {}
}
