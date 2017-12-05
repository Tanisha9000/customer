import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProducerPage } from './producer';

@NgModule({
  declarations: [
    ProducerPage,
  ],
  imports: [
    IonicPageModule.forChild(ProducerPage),
  ],
})
export class ProducerPageModule {}
