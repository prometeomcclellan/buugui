import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform, ModalController } from '@ionic/angular';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { CommentsPage } from '../screens/comments/comments.page';
import { bannerSliderList, citiesList, foodList, transportList, masList } from 'src/app/environments/arrays';
import { Client } from 'src/app/environments/clients';
@Component({
  selector: 'app-reels',
  templateUrl: './reels.page.html',
  styleUrls: ['./reels.page.scss'],
})
export class ReelsPage implements OnInit {

  isHome:boolean=true;
isCity:boolean=false;
isevent:boolean=false;
isActivity:boolean=false;
isSport:boolean=false;
isNightlife:boolean=false;
isEntertainment:boolean=false;
hasLoaded:boolean=false;
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  @ViewChild('modalComments') modalComments: ElementRef | undefined;
  @ViewChildren("video") divs?: QueryList<any>

  @ViewChildren("horizontalVideo") horizontalDivs?: QueryList<any>
  @ViewChild('horizontalSwiper') horizontalSwiperRef: ElementRef | undefined;

  bannerSliderList = bannerSliderList
  transportList = transportList
  citiesListX = citiesList
  foodList = foodList
  masList = masList
  clientData = Client

  horizontalCurrentIndex = 0;

  currentIndex = 0;

  citiesList = [
    {
      id: '2',
      videoUrl: '../../../assets/videos/Ciudad/Tegucigalpa-HN/tegucigalpaPromo.mp4',
      profilePicture: '../../../assets/images/cities/tegus.jpg',
      postLikes: '750K',
      isLike: false,
      postComments: '300K',
      postUserName: 'Tegucigalpa',
      postDescription: 'Ciudad Capital de Honduras #ciudad',
      postSongName: 'Que horas son?',
      postSongImage: '../../../assets/images/worldIcon.png',
      isPlay: true,
    }
  ];

  postsList = [
    {
      id: '0',
      videoUrl: '../../../assets/videos/espressoSpot.mp4',
      profilePicture: '../../../assets/images/negociostegus/espresso.jpg',
      postLikes: '427.9K',
      isLike: false,
      postComments: '2051',
      postUserName: 'espresso',
      postDescription: 'Espresso Americano #cafe',
      postSongName: 'Espresso Americano Spot',
      postSongImage: '../../../assets/images/worldIcon.png',
      isPlay: true,
    },
    {
      id: '1',
      videoUrl: '../../../assets/videos/roadView.mp4',
      profilePicture: '../../../assets/images/negociostegus/lafinca.jpg',
      postLikes: '427.9K',
      isLike: true,
      postComments: '2051',
      postUserName: 'lafinca',
      postDescription: 'Restaurante La Finca #delicioso',
      postSongName: 'R10 - Oboy',
      postSongImage: '../../../assets/images/worldIcon.png',
      isPlay: true,
    }
  ];

  trendyCreatorsList = [
    {
      videoUrl: '../../../assets/videos/roadView.mp4',
      profilePicture: '../../../assets/images/negociostegus/lafinca.jpg',
      postShortUserName: 'La Finca',
      postUserName: 'lafinca',
    },
    {
      videoUrl: '../../../assets/videos/seaView.mp4',
      profilePicture: '../../../assets/images/negociostegus/espresso.jpg',
      postShortUserName: 'Espresso Americano',
      postUserName: 'espresohn',
    }
  ];

  relatedPost = false;
  

  constructor(public platform: Platform, private router: Router, private geo:GeolocationService, 
    public modalController: ModalController) { 
    //this.geo.printCurrentPosition();
    for (let index = 0; index < this.citiesList.length; index++) {
      const element = this.citiesList[index];
      this.postsList.push(element);
      if (index == (this.citiesList.length-1)) {
        console.log('postList');
        console.dir(this.postsList)
      }
    }
/*
    setTimeout(() => {
      for (let index = 0; index < this.citiesList.length; index++) {
        const element = this.citiesList[index];
        this.postsList.push(element);
        if (index == (this.citiesList.length-1)) {
          console.log('postList');
          console.dir(this.postsList)
        }
      }

      this.hasLoaded = true;
    }, 10000);
    */
    
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CommentsPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.8,
      cssClass: 'modal-comments'
    });
    return await modal.present();
  }

  ionViewWillLeave() {
    if (this.relatedPost) {
      this.horizontalDivs?.map((div: any) => {
        if (div.nativeElement.id == `horizontalVideo${this.horizontalCurrentIndex}`) {
          div?.nativeElement.pause();
        }
      });
    }
    else {
      this.divs?.map((div: any) => {
        if (div.nativeElement.id == `video${this.currentIndex}`) {
          div?.nativeElement.pause();
          this.postsList[this.currentIndex].isPlay = false;
        }
      });
    }
  }

  ionViewWillEnter() {
    if (this.relatedPost) {
      this.horizontalDivs?.map((div: any) => {
        if (div.nativeElement.id == `horizontalVideo${this.horizontalCurrentIndex}`) {
          div?.nativeElement.play();
        }
      });
    }
    else {
      this.divs?.map((div: any) => {
        if (div.nativeElement.id == `video${this.currentIndex}`) {
          this.postsList[this.currentIndex].isPlay = false;
          div?.nativeElement.play();
          this.postsList[this.currentIndex].isPlay = true;
        }
      });
    }
  }

  ngAfterViewInit() {
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video0`) {
        div?.nativeElement.play();
        this.postsList[0].isPlay = true;
      }
    });
  }

  ngOnInit() {
  }

  goTo(screen: any, index:any) {
    //alert(index)
    this.router.navigateByUrl(screen+"?id="+index);
  }

  goComments(){
    this.router.navigateByUrl("comments");
  }

  toggleVideo(index: any) {
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video${index}`) {
        div?.nativeElement.paused ? div?.nativeElement.play() : div?.nativeElement.pause();
        if (!div?.nativeElement.paused) {
          this.postsList[index].isPlay = true;
        }
        else {
          this.postsList[index].isPlay = false;
        }
      }
    });
  }

  getStatus(index: any) {
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video${index}`) {
        return div?.nativeElement.paused
      }
    });
  }

  onForYouSelected(type: any) {
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video${this.currentIndex}`) {
        if (type === 'playVideo') {
          div?.nativeElement.play();
          this.postsList[this.currentIndex].isPlay = true;
        }
        else {
          div?.nativeElement.pause();
          this.postsList[this.currentIndex].isPlay = false;
        }
      }
    });
  }

  toggleRelatedPost(val: boolean) {
    this.relatedPost = val;
  }

  playCurrentVideo() {
    setTimeout(() => {
      this.divs?.map((div: any) => {
        if (div.nativeElement.id == `video${this.currentIndex}`) {
          div?.nativeElement.play();
          this.postsList[this.currentIndex].isPlay = true;
        }
      });
    },);
  }

  pauseCurrentVido() {
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video${this.currentIndex}`) {
        div?.nativeElement.pause();
        this.postsList[this.currentIndex].isPlay = false;
      }
    });
  }
  goGeo(){
  alert('Oye tu')
  }

  slideChangeCall() {
    const prevIndex = this.swiperRef?.nativeElement.swiper.previousIndex;
    const newIndex = this.swiperRef?.nativeElement.swiper.activeIndex;
    this.currentIndex = this.swiperRef?.nativeElement.swiper.activeIndex;
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video${prevIndex}`) {
        div?.nativeElement.pause();
        this.postsList[prevIndex].isPlay = false;
      }
      if (div.nativeElement.id == `video${newIndex}`) {
        div?.nativeElement.play();
        this.postsList[newIndex].isPlay = true;
      }
    });
  }

  horizontalSlideChangeCall() {
    const prevIndex = this.horizontalSwiperRef?.nativeElement.swiper.previousIndex;
    const newIndex = this.horizontalSwiperRef?.nativeElement.swiper.activeIndex;
    this.horizontalCurrentIndex = this.horizontalSwiperRef?.nativeElement.swiper.activeIndex;
    this.horizontalDivs?.map((div: any) => {
      if (div.nativeElement.id == `horizontalVideo${prevIndex}`) {
        div?.nativeElement.pause();
      }
      if (div.nativeElement.id == `horizontalVideo${newIndex}`) {
        div?.nativeElement.play();
      }
    });
  }

  playTrendyVideo() {
    setTimeout(() => {
      this.horizontalDivs?.map((div: any) => {
        if (div.nativeElement.id == `horizontalVideo${this.horizontalCurrentIndex}`) {
          div?.nativeElement.play();
        }
      });
    },);

  }

  pauseTrendyVideo() {
    this.horizontalDivs?.map((div: any) => {
      if (div.nativeElement.id == `horizontalVideo${this.horizontalCurrentIndex}`) {
        div?.nativeElement.pause();
      }
    });
  }

}
