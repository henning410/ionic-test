import {Component} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {MapPage} from "../map/map.page";
import {StepperService} from 'src/app/services/stepper.service';
import {CommonModule} from '@angular/common';
import {Step1Component} from 'src/app/steps/step1/step1.component';
import {Step2Component} from 'src/app/steps/step2/step2.component';
import {Step3Component} from 'src/app/steps/step3/step3.component';
import {Step4Component} from 'src/app/steps/step4/step4.component';
import {Step5Component} from 'src/app/steps/step5/step5.component';

@Component({
  selector: 'app-addWallbox',
  templateUrl: 'addWallbox.page.html',
  styleUrls: ['addWallbox.page.scss'],
  standalone: true,
  imports: [IonicModule, MapPage, CommonModule, Step1Component, Step2Component, Step3Component, Step4Component, Step5Component]
})
export class AddWallboxPage {
  component = Step1Component;
  currentStep = 0;

  constructor(private stepperService: StepperService) {
    this.stepperService.getCurrentStep().subscribe((value) => {
      this.currentStep = value;
    })
  }

  back() {
    this.stepperService.decreaseStep();
  }

}
