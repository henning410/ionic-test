import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertController, IonicModule} from "@ionic/angular";
import {AuthService} from "../../services/auth.service";
import {Router, RouterModule} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule]
})
export class LoginPage implements OnInit {
  credentials = {
    username: '',
    password: '',
  }

  constructor(private auth: AuthService, private alertCtrl: AlertController, private router: Router) {

  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
        await this.router.navigateByUrl('/members');
      } else {
        const alert = await this.alertCtrl.create ( {
          header: 'Login Failed',
          message: 'Wrong username or password!',
          buttons: ['OK']
        });
        await alert.present();
      }
    }, async (error) => {
      const alert = await this.alertCtrl.create({
        header: 'Login Failed',
        message: 'Wrong username or password!',
        buttons: ['OK']
      });
      await alert.present();
    })
  }

}
