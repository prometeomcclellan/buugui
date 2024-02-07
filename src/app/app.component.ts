import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavController, Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Geolocation } from '@capacitor/geolocation';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tap = 0;

  constructor(
    private platform: Platform,
    private router: Router,
    private location: Location,
    private navCtrl: NavController,
    private so: ScreenOrientation
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  ngOnInit() {
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      if (
        this.location.isCurrentPathEqualTo('/bottom-tab-bar/home') ||
        this.location.isCurrentPathEqualTo('/bottom-tab-bar/search') ||
        this.location.isCurrentPathEqualTo('/bottom-tab-bar/notifications')||
        this.location.isCurrentPathEqualTo('/bottom-tab-bar/profile')||
        this.location.isCurrentPathEqualTo('/auth/login')
      ) {
        this.tap++;
        if (this.tap == 2) {
          App.exitApp();
        }
        else {
          setTimeout(() => {
            this.tap = 0;
          }, 2000);
        }
      }
      else {
        if (this.location.isCurrentPathEqualTo('/subscription-done')) {
          this.router.navigateByUrl('/bottom-tab-bar/home')
        }
        else {
          this.navCtrl.back()
        }
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.geolocation();
      StatusBar.setBackgroundColor({ color: '#000000' });
      StatusBar.setStyle({ style: Style.Dark });
      this.so.lock(this.so.ORIENTATIONS.PORTRAIT_PRIMARY);

      this.so.onChange().subscribe(
        () => {
            console.log("Orientation changed to " + this.so.type);
            if (this.so.type == 'LANDSCAPE_PRIMARY') {
              this.so.type = this.so.ORIENTATIONS.PORTRAIT_PRIMARY;
            }
        }
     ); 
    })
  }

  async geolocation(){
    const permissionResult = await Geolocation.checkPermissions();
    if (permissionResult.location === 'granted') {
      // El usuario ha dado permisos de geolocalización
      const coordenadas=  await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      //timeout: 10000,
      maximumAge: 1
      });
      localStorage.setItem('lasCoordenadas', JSON.stringify(coordenadas));
      localStorage.setItem('laLatitud', coordenadas.coords.latitude.toString());
      localStorage.setItem('laLongitud', coordenadas.coords.longitude.toString());
      localStorage.setItem('laPrecision', coordenadas.coords.accuracy.toString());
    } else if (permissionResult.location === 'denied') {
      // El usuario ha denegado los permisos de geolocalización
    } else {
      const permissionResult = await Geolocation.requestPermissions();
      if (permissionResult.location === 'granted') {
        // El usuario ha otorgado los permisos de geolocalización
        const coordenadas=  await Geolocation.getCurrentPosition({
          enableHighAccuracy: true,
      //timeout: 10000,
      maximumAge: 1
        });
        localStorage.setItem('lasCoordenadas', JSON.stringify(coordenadas));
        localStorage.setItem('laLatitud', coordenadas.coords.latitude.toString());
        localStorage.setItem('laLongitud', coordenadas.coords.longitude.toString());
        localStorage.setItem('laPrecision', coordenadas.coords.accuracy.toString());
      } else if (permissionResult.location === 'denied') {
        // El usuario ha denegado los permisos de geolocalización
      } else if (permissionResult.location === 'prompt') {
        // El usuario aún no ha tomado una decisión sobre los permisos de geolocalización
      }
    }
    
}
}
