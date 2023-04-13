import { Component, OnInit } from '@angular/core';
import {Step2Component} from "../step2/step2.component";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class Step1Component  implements OnInit {
  component = Step2Component;
  currentStep = 0;

  constructor(private stepperService: StepperService) {
    this.stepperService.getCurrentStep().subscribe((value) => {
      this.currentStep = value;
    })
  }

  next() {
    this.stepperService.increaseStep();
  }

  getLocation() {
    //TODO
    console.log('Get User location');
  }

  ngOnInit() {}

}
