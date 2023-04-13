import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Step3Component  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
