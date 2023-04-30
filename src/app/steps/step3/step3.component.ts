import {Component, OnInit} from '@angular/core';
import {IonicModule, RangeCustomEvent} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {StepperService} from "../../services/stepper.service";
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Step3Component implements OnInit {
  lastEmittedValue: RangeValue  = 22;

  constructor(private stepperService: StepperService) {
  }

  next() {
    this.stepperService.increaseStep();
  }

  ngOnInit() {
  }

  pinFormatter(value: number) {
    return `${value} kW`;
  }

  onIonChange(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
  }

}
