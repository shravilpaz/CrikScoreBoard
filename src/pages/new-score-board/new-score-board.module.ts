import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewScoreBoardPage } from './new-score-board';

@NgModule({
  declarations: [
    NewScoreBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(NewScoreBoardPage),
  ],
})
export class NewScoreBoardPageModule {}
