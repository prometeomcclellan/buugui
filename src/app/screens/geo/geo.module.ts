import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoPageRoutingModule } from './geo-routing.module';

import { GeoPage } from './geo.page';
import { GoogleMap } from '@capacitor/google-maps';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoPageRoutingModule
  ],
  declarations: [GeoPage]
  
})
export class GeoPageModule {
  
}


