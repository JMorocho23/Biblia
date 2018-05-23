import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PadrePage } from './padre';

@NgModule({
  declarations: [
    PadrePage,
  ],
  imports: [
    IonicPageModule.forChild(PadrePage),
  ],
})
export class PadrePageModule {}
