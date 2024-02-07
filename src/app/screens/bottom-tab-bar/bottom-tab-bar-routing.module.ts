import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomTabBarPage } from './bottom-tab-bar.page';

const routes: Routes = [
  {
    path: '',
    component: BottomTabBarPage,
    children:[
      
      {
        path: 'search',
        loadChildren: () => import('../../screens/search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'upload',
        loadChildren: () => import('../../screens/upload/upload.module').then( m => m.UploadPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../../screens/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../../screens/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'reels',
        loadChildren: () => import('../../reels/reels.module').then( m => m.ReelsPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../../screens/home/home.module').then( m => m.HomePageModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomTabBarPageRoutingModule {}
