import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Client } from 'src/app/environments/clients';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.page.html',
  styleUrls: ['./profile-settings.page.scss'],
})
export class ProfileSettingsPage implements OnInit {

  privacySwitch=false;
  messageSwitch=true;

  // Variables del arreglo de usuario entrante 
  currentUser:any=[];
  idUsuario: any;
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

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    console.log('Aja')
    this.route.queryParams.subscribe(params => {
      this.idUsuario = params["id"];
      for (let index = 0; index < Client.length; index++) {
        const element = Client[index];
        if (element.id = this.idUsuario) {
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
    });
   }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
