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

  constructor() { }

  ngOnInit() {}

  navigate() {
    console.log('Navigate!!!');
  }

  reservate() {
    console.log('Reservate!!!');
  }
}
