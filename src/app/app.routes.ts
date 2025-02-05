import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',title: 'App Home', component:HomeComponent},
    {path:'home',title: 'App Home', component:HomeComponent},
    {path:'cours',title: 'App Cours', component:HomeComponent},
    { path: 'tp', loadComponent: () => import('./tphub/tphub.component').then(m => m.TphubComponent) },
    { path: 'listfriends', loadComponent: () => import('./list-friends/list-friends.component').then(m => m.ListFriendsComponent) },
    { path: '2wdb', loadComponent: () => import('./twowaybindingtest/twowaybindingtest.component').then(m => m.TwowaybindingtestComponent) },
    { path: 'parent', loadComponent: () => import('./parent/parent.component').then(m => m.ParentComponent) },
    { path: 'blog', loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent) },
    { path: 'usermanager', loadComponent: () => import('./usermanager/usermanager.component').then(m => m.UsermanagerComponent) },
    { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
    
];
