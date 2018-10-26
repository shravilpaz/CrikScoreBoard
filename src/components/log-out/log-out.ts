import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogOutPage } from '../../pages/log-out/log-out';

/**
 * Generated class for the LogOutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'log-out',
  templateUrl: 'log-out.html'
})
export class LogOutComponent {

  constructor(public navCtrl: NavController) {
  }

  logout() {
    this.navCtrl.push(LogOutPage); 
   }
}
