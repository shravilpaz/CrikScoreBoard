import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginSuccessPage } from '../pages/login-success/login-success';
import { LogOutComponent } from '../components/log-out/log-out'
import { NewScoreBoardPage } from '../pages/new-score-board/new-score-board';
import { MatchDetailsPage } from '../pages/match-details/match-details';
import { LogOutPage } from '../pages/log-out/log-out';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginSuccessPage,
    LogOutComponent,
    LogOutPage,
    NewScoreBoardPage,
    MatchDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogOutComponent,
    LoginSuccessPage,
    LogOutComponent,
    LogOutPage,
    NewScoreBoardPage,
    MatchDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
