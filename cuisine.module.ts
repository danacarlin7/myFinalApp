import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuisinePage } from './cuisine';

@NgModule({
  declarations: [
    CuisinePage,
  ],
  imports: [
    IonicPageModule.forChild(CuisinePage),
  ],
})
export class CuisinePageModule {}
