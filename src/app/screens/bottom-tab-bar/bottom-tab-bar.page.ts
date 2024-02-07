import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { Subject, filter, takeUntil } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-bottom-tab-bar',
  templateUrl: './bottom-tab-bar.page.html',
  styleUrls: ['./bottom-tab-bar.page.scss'],
})
export class BottomTabBarPage implements OnInit {

  isIos: any;
  closed$ = new Subject<any>();
  showTabs = true;
  borderRadius:any;
  
  constructor(private router: Router,private routerOutlet:IonRouterOutlet) {
    
   }

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.closed$)
    ).subscribe((event: any) => {
      if (event['url'] === '/bottom-tab-bar/upload') {
        this.showTabs = false;
      }
      else {
        this.showTabs = true;
      }
    });

    
  }

  ionViewDidEnter() {
    this.routerOutlet.swipeGesture = false;
    //$('ion-tab-button').eq(1).click();
/*
    let daSegmentsContainer = document.getElementsByTagName('ion-tab-button');
    let iconContainer = document.getElementsByClassName('icono-tab');
    //const element = daSegmentsContainer[1];
    const elementTab = iconContainer[1];
    //element.setAttribute('style', 'color:black;background:white;');
    elementTab.setAttribute('style', 'color:black;background:white;border-radius:50%;');
    //daSegmentsContainer[0].setAttribute('style', 'color:white;background:inherit;');
    iconContainer[0].setAttribute('style', 'color:white;background:white;border-radius:none;');
    //daSegmentsContainer[2].setAttribute('style', 'color:white;background:inherit;');
    iconContainer[2].setAttribute('style', 'color:white;background:white;border-radius:none;');
*/
  }

  ionViewWillLeave() {
    this.routerOutlet.swipeGesture = true;
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

  setActiveTab(indexInput: any){
        let daSegmentsContainer = document.getElementsByTagName('ion-tab-button');
    let iconContainer = document.getElementsByClassName('icono-tab');
    if (indexInput == 1) {
      this.borderRadius = '50%';
    }else{
      this.borderRadius = '20%';
    }
// <ion-input #indexInput [hidden]="true" [value]="i" class="index-input"></ion-input>
    let daIndex = indexInput;
    for (let index = 0; index < daSegmentsContainer.length; index++) {
      const element = daSegmentsContainer[index];
      const elementTab = iconContainer[index];
      if (daIndex == index) {
        //element.setAttribute('style', 'color:black;background:white;');
        elementTab.setAttribute('style', 'color:black;background:white;border-radius:'+this.borderRadius);
      }else{
        //element.setAttribute('style', 'color:white;background:inherit;');
        elementTab.setAttribute('style', 'color:white;background:inherit;border-radius:none;');
      }
    }
  }

}
