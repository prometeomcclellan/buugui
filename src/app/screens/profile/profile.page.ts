import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Client } from 'src/app/environments/clients';
import { ClientsContent } from 'src/app/environments/clients-content';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentUser:any=[];
  contentUser:any=[];

  postsImagesList = [
    {
      id: '1',
      image: '../../../assets/images/dance/dance_1.jpg',
    },
    {
      id: '2',
      image: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      id: '3',
      image: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '4',
      image: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      id: '5',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '6',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '7',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '8',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '9',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '10',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '11',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '12',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
    {
      id: '13',
      image: '../../../assets/images/dance/dance_1.jpg',
    },
    {
      id: '14',
      image: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      id: '15',
      image: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '16',
      image: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      id: '17',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '18',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '19',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '20',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '21',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '22',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '23',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '24',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
  ];

  favoriteImagesList = [
    {
      id: '24',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
    {
      id: '23',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '22',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '21',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '20',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '19',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '18',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '17',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '16',
      image: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      id: '15',
      image: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '14',
      image: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      id: '13',
      image: '../../../assets/images/dance/dance_1.jpg',
    },
    {
      id: '12',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
    {
      id: '11',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '10',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '9',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '8',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '7',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '6',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '5',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '4',
      image: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      id: '3',
      image: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '2',
      image: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      id: '1',
      image: '../../../assets/images/dance/dance_1.jpg',
    },
  ];

  bookmarkedImagesList = [
    {
      id: '5',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '6',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '7',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '8',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '9',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '10',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '11',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '12',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
    {
      id: '13',
      image: '../../../assets/images/dance/dance_1.jpg',
    },
    {
      id: '14',
      image: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      id: '15',
      image: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '16',
      image: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      id: '17',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '18',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '19',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '20',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '21',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '22',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '23',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '24',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
  ];

  scrollValue = 0;
  isFollow = false;
  selectedTabIndex = 0;
  showLogoutDialog=false;
  idUsuario: any;

  // Variables del arreglo de usuario entrante 
  id:number | undefined;
  videoUrl:any;
  profilePicture:any;
  postLikes:any;
  isLike: boolean=false;
  postComments:any;
  postUserName:any;
  postDescription:any;
  postSongName:any;
  postSongImage:any;
  isPlay: boolean=true;
  clientTikTok:any;
  clientFollowers:any | undefined;
  clientFollowing:any | undefined;
  clientLocation:any;
  clientLatitude:number | undefined;
  clientlongitude:number | undefined;

  constructor(private router: Router, private navCtrl: NavController, private route: ActivatedRoute) { 
    console.log('Aja')
    this.route.queryParams.subscribe(params => {
      this.idUsuario = params["id"];
      let dVideo = ClientsContent[0].Video;

      dVideo?.forEach(vid =>{
        console.log(vid.idUser)
        if (vid.idUser == this.idUsuario) {
          this.contentUser.push(vid);
        }
      })

      for (let index = 0; index < Client.length; index++) {
        const element = Client[index];
        //alert(element.id == this.idUsuario)
        if (element.id == this.idUsuario) {
          this.currentUser = element;
          this.profilePicture = element.profilePicture;
          this.postUserName = element.postUserName;
          this.postLikes = element.postLikes;
          this.clientFollowers = element.clientFollowers.toString();
          this.clientFollowing = element.clientFollowing.toString();
          console.log('Este es el usuario');
          console.dir(this.currentUser)
        }
      }
      //alert(this.idUsuario)
      /*
      for (let index = 0; index < Client.length; index++) {
        const element = Client[index];
        
      }
      */
    });
  }

  ngOnInit() {
    setTimeout(() => {
      //$("#userPicture").attr('src', this.currentUser.profilePicture);
      //$("#userName").attr('text', this.currentUser.postUserName); 
      
      
         
    }, 6000);


  }

  handleScroll(ev: CustomEvent) {
    this.scrollValue = ev.detail.scrollTop;
  }

  goBack() {
    this.navCtrl.back();
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen+"?id="+this.idUsuario);
  }

}
