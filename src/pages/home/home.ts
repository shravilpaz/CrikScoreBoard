import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginSuccessPage } from '../login-success/login-success';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isLogin : boolean = false;
  isSignUp : boolean = false;
  showPW : boolean = true;
  eyeType : string = 'eye';
  PWType : string = 'password';

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController) {
  }

  ngOnInit() {
  }

   login() {
    this.isLogin = true;
    this.isSignUp = false;
  }

  signUp() {
    this.isLogin = false;
    this.isSignUp = true;
  }

  loginSubmit(username, password) {
    if(username=="s" && password=="s1") {
      this.navCtrl.push(LoginSuccessPage, {
        username : username
      }); 
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Login Failed',
        buttons: [{
          text: 'Ok',
          handler: () => {
            this.isLogin=false;
            alert.dismiss();
            return false;
          }
        }]
      });
      alert.present();
    }
  }

  signUpSubmit(fullName, email, phoneNo, dob, username, pw, re_pw) {
    console.log(fullName, email, phoneNo, dob, username, pw, re_pw);
  }

  showHidePW() {
    if(this.showPW==true){
      this.showPW=false;
      this.eyeType='eye';
      this.PWType='password';
    }
    else {
      this.showPW=true;
      this.eyeType='eye-off';
      this.PWType='text';
    }
  }
}
