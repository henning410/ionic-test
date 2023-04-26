import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PopupComponent  implements OnInit {

  @Input() name: string = '';
  @Input() longitude: string = '';
  @Input() latitude: string = '';

  constructor() { }

  ngOnInit() {}

  navigate() {
    console.log('Navigate!!!');
    window.open('https://www.google.com/maps/dir/?api=1&destination=' + this.latitude + ',' + this.longitude, "_blank");
  }

  reservate() {
    console.log('Reservate!!!');
  }
}
