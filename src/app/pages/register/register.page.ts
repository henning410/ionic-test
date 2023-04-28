import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
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
    username: '',
    email: '',
    password: '',
    verifyPassword: ''
  }

  constructor(private auth: AuthService, private router: Router, private alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ngOnInit() {
  }

  async register() {
    if (this.credentials.password !== this.credentials.verifyPassword) {
      await this.showAlert('Ups!', 'Deine Passwörter stimmen nicht überein');
    } else {
      this.auth.register(this.credentials).subscribe(async res => {
        console.log('RES: ', res);
        if (res.user) {
          await this.router.navigateByUrl('');
          const toast = await this.toastCtrl.create({
            message: 'Account erfolgreich erstellt',
            duration: 5000,
            position: 'bottom',
            icon: checkmarkOutline,
            color: 'success'
          });
          await toast.present();
        } else if (res.message) {
          await this.showAlert('Registrierung fehlgeschlagen!', res.message);
        } else {
          await this.showAlert('Ups!', 'Etwas ist schiefgelaufen');
        }
      }, async err => {
        console.log(err.error.message)
        let errString = ``;
        for (let message of err.error.message) {
          errString = errString + message + `<br/>`;
        }
        console.log('NAchricht ', errString);
        await this.showAlert('Registrierung fehlgeschlagen', errString)
      })
    }
  }

  async showAlert(header: string, message: string){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
