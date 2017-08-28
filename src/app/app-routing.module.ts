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
    // data: { title: "主页" }
  },
  {
    path: 'about',
    loadChildren: '../pages/about/about.module#AboutModule',
    // data: { title: "关于我们" }
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
    loadChildren: '../pages/my-favorite-nba-players/my-favorite-nba-players.module#MyFavoriteNbaPlayersModule',
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
  {
    path: 'snack',
    loadChildren: '../pages/snack/snack.module#SnackModule',
    data: { title: "snack street" }
  },
  { path: 'bug', loadChildren: '../pages/bug/bug.module#BugModule', data: { title: "Bug 管理系统" } },
  { path: 'asset', loadChildren: '../pages/asset/asset.module#AssetModule' ,data:{title:"我的衣帽间"}},
  {
    path: 'zhangyuexam',
    loadChildren: '../pages/zhangyuexam/zhangyuexam.module#ZhangyuexamModule',
    data: { title: "大杂烩店铺" }
  },
  { 
    path: 'flight', 
    loadChildren: '../pages/airline/airline.module#AirlineModule' ,
    data:{title:"Flight航空"}
  },
  { path: 'device', 
    loadChildren: '../pages/liuchaoexam/device.module#DeviceModule',
    data: { title: "物资管理系统" }
  },
  { path: 'employee', 
  loadChildren: '../pages/employee/employee.module#EmployeeModule',
  data:{title:"员工管理" }
  },
  { path: 'product-shop-count', 
  loadChildren: '../pages/product-shop-count/productshopcount.module#ProductshopcountModule',
  data:{title:"Annotation 工具" }
 },
  { path: 'betsy-account', 
  loadChildren: '../pages/betsy-account/betsy-account.module#BetsyAccountModule',
  data:{title:"天天记账" },
},
  { path: 'trainingcourse', 
  loadChildren: '../pages/training-course/training-course.module#TrainingCourseModule',
  data:{title:"培训课程" }
},

{ path: 'player-ranking',
loadChildren: '../pages/player-ranking/player-ranking.module#PlayerRankingModule',
data: { title: "球员数据排行" }

},

{
    path: 'hansheng-book-store',
    loadChildren: '../pages/hansheng-book-store/hansheng-book-store.module#HanshengBookStoreModule',
    data: { title: "hansheng的书店" }
  },
  {
  path: 'product',
  loadChildren: '../pages/product/product.module#ProductModule',
  data: { title: "聚美优品" }
},
{
  path: 'book-management',
  loadChildren: '../pages/book-management/book-management.module#BookManagementModule',
  data: { title: "图书管理" }
},
{
    path: 'trainer',
    loadChildren: '../pages/trainer/trainer.module#TrainerModule',
    data: { title: "讲师列表" }
  },
  { path: 'shoplist', 
  loadChildren: '../pages/taobao-shoplist/shoplist.module#ShoplistModule',
  data:{title:"淘宝购物车商品管理" }
},
  {
    path: 'game', 
    loadChildren: '../pages/game/game.module#GameModule',
    data:{title:"游戏排行榜" }
  },

  {
    path: 'cookbook', 
    loadChildren: '../pages/cookbook/cookbook.module#CookbookModule',
    data:{title:"食谱烹饪" }
  },
    {
    path: 'zhangyuDepartment',
    loadChildren: '../pages/zhangyu/zhangyu.module#ZhangyuModule',
    data: { title: "部门管理" }
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

