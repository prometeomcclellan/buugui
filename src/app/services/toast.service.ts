import { Injectable } from '@angular/core';
import { ToastController,LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  lasAtenciones:any=[];
  siniestroTercero:any=[];
  toastMessage:any; toastPosition:any; toastClass:any
  constructor(private toaster:ToastController, private loading: LoadingController, private router: Router ) { 
    this.toastMessage = 'Buugui';
    this.toastPosition = 'top';
    this.toastClass ='por-salud';
  }
  async dismissToast(){
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
  }
  
  async presentToastReload(message: any, position: any, clase: string) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);

    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 2000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [],
    });
  
  
    await toast.present();
  }

  async presentToastNoButtons(message: any, position: any, clase: string) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);

    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 10000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [],
    });
  
  
    await toast.present();
  }

  async presentToast(message: any, position: any, clase: string) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);

    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
        },
        {
          text: 'SI',
          role: 'confirm',
          handler: () => {
//            this.location.back()
            window.location.reload()
          }
        },
      ],
    });
  
  
    await toast.present();
  }

  //presentToastSaveCliente
  async presentToastSaveCliente(message: any, position: any, clase: string, data: any) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);
    //let laPlaca = data.NumeroPlaca;
    //let laAtencion = data.Id;
    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'NO SALIR',
          role: 'cancel'
        },
        {
          text: 'SALIR SIN GUARDAR',
          role: 'reload',
          handler: () => {
            window.location.reload()
          }
        },
      ],
    });
    await toast.present();
  }


  async presentToastSiniestroGuardado(message: any, position: any, clase: string) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);
    //let idAtencion = data;
    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,// + idAtencion,
      color: 'primary',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'LISTO',
          role: 'cancel',
          handler: () => {
            
          }
        }
      ],
    });
    await toast.present();
  }

  async presentToastSave(message: any, position: any, clase: string, data: { NumeroPlaca: any; Id: any; }) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);
    let laPlaca = data.NumeroPlaca;
    let laAtencion = data.Id;
    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'NO SALIR',
          role: 'cancel'
        },
        {
          text: 'SALIR SIN GUARDAR',
          role: 'reload',
          handler: () => {
            window.location.reload()
          }
        },
      ],
    });
    await toast.present();
  }
  

  async presentToastErrorConexion(message: any, position: any, clase: string) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'dark',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
  
    await toast.present();
  }

  async presentToastSiniestroCerrado(message: any, position: any, clase: string) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'danger',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
  
    await toast.present();
  }

  async presentToastEmailInvalid(message: any, position: any, clase: string) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'danger',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
  
    await toast.present();
  }

  async presentToastDataMissing(message: any, position: any, clase: string) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'danger',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'SALIR SIN GUARDAR',
          role: 'cancel',
        },
        {
          text: 'AGREGAR DATOS',
          role: 'cancel',
        },
      ],
    });
  
    await toast.present();
  }

  async presentToastDataMissingExpediente(message: any, position: any, clase: string) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'danger',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
        },
      ],
    });
  
    await toast.present();
  }
}
