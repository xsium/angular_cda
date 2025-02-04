import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'home',title: 'App Home', component:HomeComponent},
    {path:'cours',title: 'App Cours', component:HomeComponent},
    {path:'tp',title: 'App TP', component:HomeComponent},
    { path: 'listfriends', loadComponent: () => import('./list-friends/list-friends.component').then(m => m.ListFriendsComponent) },
    { path: '2wdb', loadComponent: () => import('./twowaybindingtest/twowaybindingtest.component').then(m => m.TwowaybindingtestComponent) },
    { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
    
];
