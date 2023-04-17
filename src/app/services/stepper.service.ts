import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  currentStep: BehaviorSubject<number>;

  constructor() {
    this.currentStep = new BehaviorSubject<number>(0);
   }

   getCurrentStep(): Observable<number> {
    return this.currentStep.asObservable();
  }

  increaseStep() {
    this.currentStep.next(this.currentStep.value + 0.25);
  }

  decreaseStep() {
    this.currentStep.next(this.currentStep.value - 0.25);
  }
}
