import { Routes } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    }
];
