import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ReelsPageRoutingModule } from './reels-routing.module';

import { ReelsPage } from './reels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReelsPageRoutingModule
  ],
  declarations: [ReelsPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ReelsPageModule {}
