import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Network, ConnectionStatus } from '@capacitor/network';
import { ToastService } from 'src/app/services/toast.service';
import { bannerSliderList, citiesList, foodList, transportList, masList } from 'src/app/environments/arrays';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  bannerSliderList = bannerSliderList
  transportList = transportList
  citiesList = citiesList
  foodList = foodList
  masList = masList

  public results:any = [];
  public resultados:any = [];
  networkStatus:ConnectionStatus | undefined;
  search = '';
  currentBannerIndex=0;
  toastMessage:string="";

  isResult:boolean=false;
  

  constructor(private so: ScreenOrientation, private toaster:ToastService,
    private router: Router,    private route: ActivatedRoute) { 
    this.so.lock(this.so.ORIENTATIONS.PORTRAIT_PRIMARY);
    console.log('Here screenlock')

    
    for (let index = 0; index < this.citiesList.length; index++) {
      const element = this.citiesList[index];
      this.results.push(element);
      this.resultados.push(element);
    }
    
    for (let index = 0; index < this.masList.length; index++) {
      const element = this.masList[index];
      this.results.push(element);
      this.resultados.push(element);
    }

    for (let index = 0; index < this.transportList.length; index++) {
      const element = this.transportList[index];
      this.results.push(element);
      this.resultados.push(element);
    }
    
    console.log('results array');
    console.dir(this.results);

    if(Network){
      Network.getStatus().then((status) =>{
        this.networkStatus = status;
        console.log("Estado de red ");
        console.dir(this.networkStatus);

        if (this.networkStatus.connected==true) {
          this.toastMessage = "Estás conectado =)";
        }else{
          this.toastMessage = "Estás desconectado ='( ";
        }
        //this.toaster.presentToastErrorConexion(this.toastMessage, 'bottom', 'network');
      })
    }
    Network.addListener("networkStatusChange", status=>{
      this.networkStatus=status;
      console.log("Estado de red ");
      console.dir(this.networkStatus);
      if (this.networkStatus.connected==true) {
        this.toastMessage = "Estás conectado =)";
      }else{
        this.toastMessage = "Estás desconectado ='( ";
      }
      //this.toaster.presentToastErrorConexion(this.toastMessage, 'bottom', 'network');
    })
  }

  ngOnInit() {
  }

  

  slideChangeCall(){
    this.currentBannerIndex = this.swiperRef?.nativeElement.swiper.activeIndex;
  }

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();

    if (query == '' || query == null) {
      $('.result-container').eq(0).fadeOut('slow');
    }else{
      this.results = this.resultados.filter((d: { searchTag: string; }) => d.searchTag.toLowerCase().indexOf(query) > -1);
      $('.result-container').eq(0).fadeIn('slow');
    }
    
  }

  goTo(screen: any, index:any) {
    //alert(index)
    this.router.navigateByUrl(screen+"?id="+index);
  }

  goCity(cityName:any, cityId:any){
    localStorage.setItem('cityName', cityName);
    this.router.navigateByUrl("city?id="+cityId)
  }

  goMore(moreName:any, moreId:any){
    localStorage.setItem('moreName', moreName);
    this.router.navigateByUrl("more?id="+moreId)
  }

  goTransportation(transportName:any, transportId:any){
    localStorage.setItem('transportName', transportName);
    this.router.navigateByUrl("transportation?id="+transportId)
  }

  validateSearch(event: any){
    console.log(event.target.value)
  }

  hideSlider(){
    this.isResult = true;
    let masContainer = document.getElementsByClassName('scroll-container');

    $("#bannerSlider").fadeOut('slow');
    for (let index = 0; index < masContainer.length; index++) {
      $('.scroll-container').eq(index).fadeOut('slow');
    }

    //$('.result-container').eq(0).fadeIn('slow');
  }

  showSlider(){
    this.isResult = false;
    let masContainer = document.getElementsByClassName('scroll-container');

    $("#bannerSlider").fadeIn('slow');
    for (let index = 0; index < masContainer.length; index++) {
      $('.scroll-container').eq(index).fadeIn('slow');
    }
    $('.result-container').eq(0).fadeOut('slow');
  }
}
