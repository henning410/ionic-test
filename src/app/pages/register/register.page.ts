import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertController, IonicModule, ToastController} from '@ionic/angular';
import {AuthService} from "../../services/auth.service";
import {Router, RouterModule} from "@angular/router";
import {checkmarkOutline} from "ionicons/icons";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule]
})
export class RegisterPage implements OnInit {
  credentials = {
    username: 'neu',
    email: 'neu',
    password: 'neu',
    verifyPassword: 'neu'
  }

  constructor(private auth: AuthService, private router: Router, private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  register() {
      this.auth.register(this.credentials).subscribe( async res => {
        console.log('RES: ', res);
        if (res) {
          await this.router.navigateByUrl('');
          const toast = await this.toastCtrl.create({
            message: 'Account erfolgreich erstellt',
            duration: 5000,
            position: 'bottom',
            icon: checkmarkOutline,
            color: 'success'
          });

          await toast.present();
        } else {
          const alert = await this.alertCtrl.create({
            header: 'Register Failed',
            message: 'Something went wrong!',
            buttons: ['OK']
          });
          await alert.present();
        }
      }, async err => {
        console.log(err.error.message)
        let errString = ``;
        for (let message of err.error.message) {
          errString = errString + message + `<br/>`;
        }
        console.log('NAchricht ' , errString);
        const alert = await this.alertCtrl.create({
          header: 'Register Failed',
          message: `Are these details correct?<br> Price ($/L): <br> KMs Done: <br> Total Spent: <br\> Fuel Type: <br\> Date: `,
          buttons: ['OK']
        });
        await alert.present();
      })
  }
}
