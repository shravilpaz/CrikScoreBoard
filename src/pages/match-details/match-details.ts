import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MatchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match-details',
  templateUrl: 'match-details.html',
})
export class MatchDetailsPage {
  
  public nPlayers;
  public nOvers;
  public t1name;
  public t2name;
  public nEPlayers;
  public t1players = new Array();
  public t2players = new Array();
  public t1Eplayers = new Array();
  public t2Eplayers = new Array();
  public t1PTrue = new Array();
  public t2PTrue = new Array();
  public t1EPTrue = new Array();
  public t2EPTrue = new Array();
  public matchDetails = false;
  public t1Details = false;
  public t2Details = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
    this.nOvers = parseInt(this.navParams.get('nOvers'));
    this.nPlayers = parseInt(this.navParams.get('nPlayers'));
    this.t1name = this.navParams.get('t1name');
    this.t2name = this.navParams.get('t2name');
    this.nEPlayers = this.navParams.get('nEPlayers');
  }

  start(winTeam, winTeamDecided){
    this.matchDetails=true;
  }

  addPlayer(tName, tPlayer){
    if(tPlayer!=''){
    if(tName==this.t1name){
      this.t1players.push(tPlayer)
      this.t1PTrue.push(true);
    }
    else if(tName==this.t2name){
      this.t2players.push(tPlayer)
      this.t2PTrue.push(true)
    }
  }
  else{
    let alert = this.alertCtrl.create({
      title: "A player's name cannot be empty.",
      buttons: [{
        text: 'Ok',
        handler: () => {
          alert.dismiss();
          return false;
        }
      }]
    });
    alert.present();  
  }
    
  }

  addExtraPlayer(tName, tEPlayer){
    if(tEPlayer!=''){
    if(tName==this.t1name){
      this.t1Eplayers.push(tEPlayer)
      this.t1EPTrue.push(true)
    }
    else if(tName==this.t2name){
      this.t2Eplayers.push(tEPlayer)
      this.t2EPTrue.push(true)
    }
  }
  else{
    let alert = this.alertCtrl.create({
      title: "An extra player's name cannot be empty.",
      buttons: [{
        text: 'Ok',
        handler: () => {
          alert.dismiss();
          return false;
        }
      }]
    });
    alert.present();
  }
  }

  submitplayers(tName){
    if(tName==this.t1name){
      this.t1Details==true
    }
    else if(tName==this.t2name){
      this.t2Details==true
    }
  }
}
