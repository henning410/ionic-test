import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {map, Observable, take} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {AlertController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private auth: AuthService, private router: Router, private alertCtrl: AlertController) {
  }

  canActivate(): Observable<boolean> {
   return this.auth.user.pipe(
      take(1),
      map(user => {
        console.log('in canActivate: ', user);
        if (!user) {
          this.alertCtrl.create({
            header: 'Unauthorized',
            message: 'You are not allowed to access this page',
            buttons: ['OK']
          }).then(alert => alert.present())
          this.router.navigateByUrl('/')
          return false;
        } else {
          return true;
        }
      })
    )
  }

}
