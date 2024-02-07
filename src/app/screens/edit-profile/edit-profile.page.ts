import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Client } from 'src/app/environments/clients';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  showPhoneDialog = false;
  phoneNumber = '9603456878';
  filnalPhoneNumber = '9603456878';

  showEmailDialog = false;
  email = 'test@gmail.com';
  finalEmail = 'test@gmail.com';

  showPasswordDialog = false;
  password = '';
  finalPassword = '12456';

  showUrlDialog = false;
  url = '';
  finalUrl = '';

  public actionSheetButtons = [
    {
      text: 'Camera',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Choose from Gallery',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

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

  constructor(public modalCtrl: ModalController, private router: Router, private navCtrl: NavController
    , private route: ActivatedRoute) {
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

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

  goBack() {
    this.navCtrl.back()
  }

}
