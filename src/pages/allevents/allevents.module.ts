import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlleventsPage } from './allevents';

@NgModule({
  declarations: [
    AlleventsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlleventsPage),
  ],
})
export class AlleventsPageModule {}
