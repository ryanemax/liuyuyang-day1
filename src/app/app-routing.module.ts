import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazyload模式路由，适合服务端渲染
const SSRroutes: Routes = [
  {
    path: '',
    children: []
  },
<<<<<<< HEAD
<<<<<<< HEAD
  { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
  { path: 'about', loadChildren: '../pages/about/about.module#AboutModule' },
  { path: 'contact', loadChildren: '../pages/contact/contact.module#ContactModule' },
  { path: 'movie', loadChildren: '../pages/movie/movie.module#MovieModule' },
  { path: 'employee', loadChildren: '../pages/employee/employee.module#EmployeeModule' },
=======
  { path: 'home', 
  loadChildren: '../pages/home/home.module#HomeModule',
  data:{title:"主页"} 
 },
  { path: 'about', 
  loadChildren: '../pages/about/about.module#AboutModule',
  data:{title:"关于我们"} 
},
  { 
    path: 'contact', 
    loadChildren: '../pages/contact/contact.module#ContactModule', 
    data:{title:"联系人"}
  },
  { path: 'movie', 
  loadChildren: '../pages/movie/movie.module#MovieModule',
  data:{title:"电影"}
},
 { path: 'pmj', 
 loadChildren: '../pages/pmj/pmj.module#PmjModule',
  data:{title:"PMJ"}
 },
  { path: 'cardpreview',
  loadChildren: '../pages/card-preview/card-preview.module#CardPreviewModule' ,
  data:{title:"卡牌预览"}
},
<<<<<<< HEAD
>>>>>>> e6b526ad4d39437b93fb8497c1555bd2bb9f38cc
=======
{ path: 'fast-mail',
loadChildren: '../pages/fast-mail/fast-mail.module#FastMailModule' ,
data:{title:"FastMail快递"}
},
>>>>>>> a6b5158fcf4c2045e17e89a93a0dbf1af93b43e4
=======
  {
    path: 'home',
    loadChildren: '../pages/home/home.module#HomeModule',
    data: { title: "主页" }
  },
  {
    path: 'about',
    loadChildren: '../pages/about/about.module#AboutModule',
    data: { title: "关于我们" }
  },
  {
    path: 'contact',
    loadChildren: '../pages/contact/contact.module#ContactModule',
    data: { title: "联系人" }
  },
  {
    path: 'movie',
    loadChildren: '../pages/movie/movie.module#MovieModule',
    data: { title: "电影" }
  },
  {
    path: 'pmj',
    loadChildren: '../pages/pmj/pmj.module#PmjModule',
    data: { title: "PMJ" }
  },
  {
    path: 'cardpreview',
    loadChildren: '../pages/card-preview/card-preview.module#CardPreviewModule',
    data: { title: "卡牌预览" }
  },
  {
    path: 'fast-mail',
    loadChildren: '../pages/fast-mail/fast-mail.module#FastMailModule',
    data: { title: "FastMail快递" }
  },
  { path: 'bug', loadChildren: '../pages/bug/bug.module#BugModule', data: { title: "Bug 管理系统" } },
>>>>>>> 8f5b39307d6a1acee2fc57beb332ed7071d11d9c
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

// 配置路由模式
export const routes = SSRroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

