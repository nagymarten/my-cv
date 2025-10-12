import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';
import { Projects } from './features/projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: '**',
    component: NotFound,
  },
];
