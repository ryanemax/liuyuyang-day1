import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaobaoShoplistComponent } from './taobao-shoplist/taobao-shoplist.component'
import { TaobaoShopEditComponent } from './taobao-shopedit/shop-edit.component'

// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material"

import { ShopService } from "./shop.service"

@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MaterialModule,
    RouterModule.forChild([
      { path: '', component: TaobaoShoplistComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: TaobaoShopEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[ShopService],
  declarations: [TaobaoShoplistComponent,TaobaoShopEditComponent]
})
export class ShoplistModule { }
