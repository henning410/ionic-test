import { Component, OnInit } from '@angular/core';
import {Step2Component} from "../step2/step2.component";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-step1',
  standalone: true,
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class Step1Component  implements OnInit {
  component = Step2Component;

  constructor() { }

  ngOnInit() {}

}
