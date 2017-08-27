import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazyload模式路由，适合服务端渲染
const SSRroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
  { path: 'about', loadChildren: '../pages/about/about.module#AboutModule' },
  { path: 'contact', loadChildren: '../pages/contact/contact.module#ContactModule' },
  { path: 'movie', loadChildren: '../pages/movie/movie.module#MovieModule' },
<<<<<<< HEAD
  { path: 'pmj', loadChildren: '../pages/pmj/pmj.module#PmjModule' },
=======
  { path: 'cardpreview', loadChildren: '../pages/card-preview/card-preview.module#CardPreviewModule' },
>>>>>>> 995d5e81ba4196d3deb33403a921de69125d2736
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

// 配置路由模式
const routes = SSRroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
