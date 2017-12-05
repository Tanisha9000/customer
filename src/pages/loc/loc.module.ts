import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocPage } from './loc';

@NgModule({
  declarations: [
    LocPage,
  ],
  imports: [
    IonicPageModule.forChild(LocPage),
  ],
})
export class LocPageModule {}
