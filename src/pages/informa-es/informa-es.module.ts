import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformaEsPage } from './informa-es';
import { MapsPage } from '../maps/maps';

@NgModule({
  declarations: [
    InformaEsPage,
    MapsPage,
  ],
  imports: [
    IonicPageModule.forChild(InformaEsPage),
    IonicPageModule.forChild(MapsPage),


  ],
})
export class InformaEsPageModule {}
