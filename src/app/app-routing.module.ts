import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/bottom-tab-bar/search',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./screens/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./screens/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'bottom-tab-bar',
    loadChildren: () => import('./screens/bottom-tab-bar/bottom-tab-bar.module').then(m => m.BottomTabBarPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./screens/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'video-maker-profile',
    loadChildren: () => import('./screens/video-maker-profile/video-maker-profile.module').then( m => m.VideoMakerProfilePageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./screens/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./screens/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'profile-settings',
    loadChildren: () => import('./screens/profile-settings/profile-settings.module').then( m => m.ProfileSettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./screens/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'terms-of-use',
    loadChildren: () => import('./screens/terms-of-use/terms-of-use.module').then( m => m.TermsOfUsePageModule)
  },
  {
    path: 'geo',
    loadChildren: () => import('./screens/geo/geo.module').then( m => m.GeoPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./screens/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'reels',
    loadChildren: () => import('./reels/reels.module').then( m => m.ReelsPageModule)
  },
  {
    path: 'city',
    loadChildren: () => import('./screens/city/city.module').then( m => m.CityPageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./screens/more/more.module').then( m => m.MorePageModule)
  },
  {
    path: 'transportation',
    loadChildren: () => import('./screens/transportation/transportation.module').then( m => m.TransportationPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./screens/comments/comments.module').then( m => m.CommentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
