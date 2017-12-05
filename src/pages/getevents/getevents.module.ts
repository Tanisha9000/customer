import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeteventsPage } from './getevents';

@NgModule({
  declarations: [
    GeteventsPage,
  ],
  imports: [
    IonicPageModule.forChild(GeteventsPage),
  ],
})
export class GeteventsPageModule {}
