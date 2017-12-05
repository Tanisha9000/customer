import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddticketPage } from './addticket';

@NgModule({
  declarations: [
    AddticketPage,
  ],
  imports: [
    IonicPageModule.forChild(AddticketPage),
  ],
})
export class AddticketPageModule {}
