import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'osm-map',
    loadComponent: () => import('./osm-map/osm-map.page').then( m => m.OsmMapPage)
  },  {
    path: 'osm-map2',
    loadComponent: () => import('./osm-map2/osm-map2.page').then( m => m.OsmMap2Page)
  },

];
