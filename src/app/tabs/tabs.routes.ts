import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/members/map',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'wallet',
        loadComponent: () =>
          import('../pages/wallet/wallet.page').then((m) => m.WalletPage),
      },
      {
        path: 'map',
        loadComponent: () =>
          import('../pages/map/map.page').then((m) => m.MapPage),
      },
      {
        path: 'addWallbox',
        loadComponent: () =>
          import('../pages/addWallbox/addWallbox.page').then((m) => m.AddWallboxPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../pages/profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/tabs/map',
        pathMatch: 'full',
      },
    ],
  }
];
