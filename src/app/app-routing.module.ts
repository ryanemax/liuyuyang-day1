import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazyload模式路由，适合服务端渲染
const SSRroutes: Routes = [
  {
    path: '',
    children: []
  },
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
  { path: 'myfavoritenbaplayers',
	loadChildren: '../pages/my-favorite-nba-players/my-favorite-nba-players.module#MyFavoriteNbaPlayersModule' ,
	data:{title:"My Favorite NBA Players"}
	},
  {
    path: 'cardpreview',
    loadChildren: '../pages/card-preview/card-preview.module#CardPreviewModule',
    data: { title: "卡牌预览" }
  },
  { path: 'goods-shop',
    loadChildren: '../pages/goods-shop/goods-shop.module#GoodsShopModule' ,
    data:{title:"7-12 网上商城"}
  },
  {
    path: 'fast-mail',
    loadChildren: '../pages/fast-mail/fast-mail.module#FastMailModule',
    data: { title: "FastMail快递" }
  },
  { path: 'bug', loadChildren: '../pages/bug/bug.module#BugModule', data: { title: "Bug 管理系统" } },
  { path: 'asset', loadChildren: '../pages/asset/asset.module#AssetModule' ,data:{title:"我的衣帽间"}},
  {
    path: 'zhangyuexam',
    loadChildren: '../pages/zhangyuexam/zhangyuexam.module#ZhangyuexamModule',
    data: { title: "大杂烩店铺" }
  },
  { path: 'employee', 
  loadChildren: '../pages/employee/employee.module#EmployeeModule',
  data:{title:"员工管理" }
 },
  { path: 'betsy-account', 
  loadChildren: '../pages/betsy-account/betsy-account.module#BetsyAccountModule',
  data:{title:"天天记账" },
},
  { path: 'trainingcourse', 
  loadChildren: '../pages/training-course/training-course.module#TrainingCourseModule',
  data:{title:"培训课程" }
},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

// 配置路由模式
export const routes = SSRroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

