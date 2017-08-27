import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaobaoShoplistComponent } from './taobao-shoplist/taobao-shoplist.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TaobaoShoplistComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [TaobaoShoplistComponent,]
})
export class ShoplistModule { }
