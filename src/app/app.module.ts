import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, iosTransitionAnimation } from '@ionic/angular';
import { AppComponent } from './app.component';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({navAnimation:iosTransitionAnimation}), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ScreenOrientation,],
  bootstrap: [AppComponent],
})
export class AppModule {}
