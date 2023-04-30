import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {StepperService} from "../../services/stepper.service";

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Step4Component implements OnInit {

  constructor(private stepperService: StepperService) {
  }

  next() {
    this.stepperService.increaseStep();
  }

  ngOnInit() {
  }

}
