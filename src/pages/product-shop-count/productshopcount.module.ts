import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductShopCountComponent } from './product-shop-count/product-shop-count.component';
import { ProductShopCountListComponent } from './product-shop-count-list/product-shop-count-list.component'
import { ProductShopCountEditComponent } from './product-shop-count-edit/product-shop-count-edit.component';

// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material"
import { ProductShopCountService  } from "./product-shop-count.service";

@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MaterialModule,
    RouterModule.forChild([
      { path: '', component: ProductShopCountListComponent, pathMatch: 'full' },
      { path: 'edit/:product_code', component: ProductShopCountEditComponent, pathMatch: 'full' }
    ]),
  ],
 providers:[ProductShopCountService],
  declarations: [ProductShopCountComponent,ProductShopCountListComponent, ProductShopCountEditComponent
  ]
})
export class ProductshopcountModule { }
