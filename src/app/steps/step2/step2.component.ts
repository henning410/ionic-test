import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-step2',
  standalone: true,
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class Step2Component  implements OnInit {
  currentStep = 0;

  constructor(private stepperService: StepperService) {
    this.stepperService.getCurrentStep().subscribe((value) => {
      this.currentStep = value;
    })
  }

  next() {
    this.stepperService.increaseStep();
  }

  ngOnInit() {}

}
