import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the LogOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-out',
  templateUrl: 'log-out.html',
})
export class LogOutPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform) {
    this.platform.ready().then(() => {
      document.addEventListener('backbutton', () => {
       if (this.navCtrl.canGoBack()) {
         this.platform.exitApp()
         return;
       }
       this.navCtrl.pop()
     }, false);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogOutPage');
  }

}
