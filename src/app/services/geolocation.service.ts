import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';



@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
position:any;
dAccuracy:any;
geoInterval:any;
geoData:any;
  constructor() { 
    this.geoInterval = setInterval(() => { 
      this.printCurrentPosition(); // Now the "this" still references the component
   }, 1000);
  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      //timeout: 10000,
      maximumAge: 1
    }).then((resp) => {
      console.log(resp);
      this.position = resp;
      //alert(this.position.coords.longitude)
      this.dAccuracy = this.position.coords.accuracy;
      console.log('Presition is '+this.dAccuracy)
      if (this.dAccuracy < 30) {
        //alert('Close broh')
        
        clearInterval(this.geoInterval)
        this.geoData = JSON.stringify(this.position);
        localStorage.setItem('position', JSON.stringify(this.position));
      }else{
        this.printCurrentPosition();
      }
    })
    .catch((error) => {
      console.log('Error getting location for weather marker', error);
    });
  };
}
