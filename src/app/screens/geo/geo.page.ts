import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';

declare var google: any;
@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit {
  @ViewChild('map')
  mapRef!: ElementRef;
  map!: GoogleMap;

  laLocalidad:any=[];
  position:any;
  dAccuracy:any;
  geoInterval:any;
  geoData:any;
  newMaP: GoogleMap | undefined;
  latitud: number | undefined;
  longitud: number | undefined;
  lati:any="";
  long:any="";
  markerId: string | undefined;
  constructor(public platform: Platform, private router: Router, private geo:GeolocationService, private tostador:ToastService) { 
    this.platform.ready().then(() => {
      this.printCurrentPosition();
    })

    
    //this.laLocalidad = localStorage.getItem('position');
    //console.log('OK');
    //console.dir(this.laLocalidad.coords.latitude);
    //this.geoData = JSON.stringify(this.laLocalidad);
    //console.log('Latitud '+this.laLocalidad[0].coords.latitude)
  }

  ngOnInit() {
    //google.maps.event.addDomListener(window, "load", this.loadMap());
    this.platform.backButton.subscribe(()=>{
      //once you press the back button it will execute what you write of code here
      this.Torval();
    });
  }

  async printCurrentPosition() {
    this.lati = localStorage.getItem('laLatitud');
     this.long = localStorage.getItem('laLongitud');
     let precision = localStorage.getItem('laPrecision');
     this.latitud = parseFloat(this.lati);
     this.longitud = parseFloat(this.long);
     //this.tostador.presentToastNoButtons(precision, 'top', 'geo');
    /*
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      //timeout: 10000,
      maximumAge: 1
    }).then(async (resp) => {
      console.log(resp);
      this.position = resp;
      //alert(this.position.coords.longitude)
      this.dAccuracy = resp.coords.accuracy;
      console.log('Presition is '+this.dAccuracy);
      this.laLocalidad.push({
        mensaje: 'Presition is '+this.dAccuracy, 
        latitud: resp.coords.latitude,
        longitud: resp.coords.longitude,
        speed: resp.coords.speed,
        tiempo: resp.timestamp
      })

     

      this.geoData = JSON.stringify(this.laLocalidad);

      if (this.dAccuracy < 30) {
        //alert('Close broh')
        
        clearInterval(this.geoInterval)
        alert('Mapa 2')

        setTimeout(async () => 
          this.map =  await GoogleMap.create({
          id: 'my-cool-map',
          apiKey: 'AIzaSyAYCiRNlajEjCScHNl7HsmHFjkoFbolhzY',
          element: this.mapRef.nativeElement,
          config: {
            center: {
              lat: resp.coords.latitude,
              lng: resp.coords.longitude
            },
            zoom:20
          }
        })
              
        , 10000);
        
       
        localStorage.setItem('position', JSON.stringify(this.position));
      }else{
        this.printCurrentPosition();
      }
      
    })

    .catch((error) => {
      this.laLocalidad.push({
        mensaje: 'Error getting location for weather marker'+ error
      })

      this.geoData = JSON.stringify(this.laLocalidad);
      console.log('Error getting location for weather marker', error);
    });
    */
  }

 

  ionViewDidEnter(){
    this.createMap();
  }

  async createMap() {
    let coordenadas;
    coordenadas = {lat: this.latitud, lng: this.longitud}
    //alert(this.latitud+', '+this.longitud)
    this.newMaP = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: "AIzaSyAgUTuDMAV7U7yYVbjyAi0SHLst-mPtRx8",
      config: {
        center: { lat: parseFloat(this.lati),
                  lng: parseFloat(this.long)
        },
        zoom: 20,
      },
    });

    //this.addMapMarker(coordenadas);

    const markerId = await this.newMaP.addMarker({
      coordinate: {
      lat: parseFloat(this.lati),
      lng: parseFloat(this.long)
      },
      
      title:"Lugar del siniestros",
  });
  
    this.markerId = markerId;

    const click = await this.newMaP.setOnMapClickListener(click => {
      alert('Hey vo')
      })

    // Add a marker to the map
    //this.addMapMarker(coodernadas);
    //click on map
    //this.clickInMap();
}

async addMapMarker(coordenates: any){
  console.log(coordenates.lat+', '+coordenates.lng)
  
}
async clickInMap(){
  
}
async Torval(){
  if(this.newMaP !== undefined){
    const putin = this.newMaP.destroy();
    console.log(putin)
  }
  
}

  loadMap(){
    var latlng = new google.maps.LatLng( parseFloat(this.lati),parseFloat(this.long));
    var myOptions = {
        zoom: 18,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
            myOptions);

    //Market 
    var icon = {
      url: "../../assets/images/svgs/mapMarker.svg",
      scaledSize: new google.maps.Size(70, 70)
    };
    const marker = new google.maps.Marker({
      position: latlng,
      title: 'Buugui',
      icon: icon,
      snippet:'Omarukun',
      animation: 'DROP'
    });
    marker.setMap(map);

  }
}


