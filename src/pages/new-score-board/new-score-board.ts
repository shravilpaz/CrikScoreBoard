import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewScoreBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-score-board',
  templateUrl: 'new-score-board.html',
})
export class NewScoreBoardPage {

  public nPlayers;
  public nOvers;
  public t1name;
  public t2name;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nOvers = parseInt(this.navParams.get('nOvers'));
    this.nPlayers = parseInt(this.navParams.get('nPlayers'));
    this.t1name = this.navParams.get('t1name');
    this.t2name = this.navParams.get('t2name');
  }

}
