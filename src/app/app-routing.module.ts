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
  { path: 'asset', loadChildren: '../pages/asset/asset.module#AssetModule' ,data:{title:"我的衣帽间"}},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

// 配置路由模式
const routes = SSRroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
