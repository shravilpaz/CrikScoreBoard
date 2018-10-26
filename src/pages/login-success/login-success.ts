import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MatchDetailsPage } from '../../pages/match-details/match-details';

/**
 * Generated class for the LoginSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-success',
  templateUrl: 'login-success.html',
})
export class LoginSuccessPage {

  public username: string;
  public newScore: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.username = this.navParams.get('username');
  }

  startNewScore(nOvers, nPlayers, t1name, t2name, nEPlayers) {
    if (t1name != t2name) {
      if(nPlayers>nEPlayers){
        this.navCtrl.push(MatchDetailsPage, {
          nOvers: nOvers,
          nPlayers: nPlayers,
          t1name: t1name,
          t2name: t2name,
          nEPlayers : nEPlayers
        });
      }
      else{
        let alert = this.alertCtrl.create({
          title: 'Number of extra players should be less than the number of actual players.',
          buttons: [{
            text: 'Ok',
            handler: () => {
              this.newScore=false;
              alert.dismiss();
              return false;
            }
          }]
        });
        alert.present();
      }
      }
    else {
      let alert = this.alertCtrl.create({
        title: 'Team names should be different.',
        buttons: [{
          text: 'Ok',
          handler: () => {
            this.newScore=false;
            alert.dismiss();
            return false;
          }
        }]
      });
      alert.present();
    }
  }
}
