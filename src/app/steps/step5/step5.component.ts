import {Component, OnInit} from '@angular/core';
import {IonicModule, ToastController} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {checkmarkOutline, globe} from "ionicons/icons";

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Step5Component implements OnInit {

  constructor(private toastController: ToastController) {
  }

  ngOnInit() {
  }

  async save() {
    const toast = await this.toastController.create({
      message: 'Wallbox erfolgreich hinzugefügt',
      duration: 1500,
      position: 'top',
      icon: checkmarkOutline,
      color: 'success'
    });

    await toast.present();
  }
}
