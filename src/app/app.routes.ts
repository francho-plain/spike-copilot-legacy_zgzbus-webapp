import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MapComponent } from './components/map/map.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
