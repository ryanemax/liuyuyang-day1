import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductShopCountComponent } from './product-shop-count/product-shop-count.component';
import { ProductShopCountListComponent } from './product-shop-count-list/product-shop-count-list.component'
import { ProductShopCountEditComponent, DialogResult } from './product-shop-count-edit/product-shop-count-edit.component';
import { ProductShopCountDialogComponent } from './product-shop-count-dialog/product-shop-count-dialog.component';
// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material"
import { SharedEditModule } from "../../shared-edit/shared-edit.module";
import { ProductShopCountService  } from "./product-shop-count.service";

@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MaterialModule,
    SharedEditModule,
    RouterModule.forChild([
      { path: '', component: ProductShopCountListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: ProductShopCountEditComponent, pathMatch: 'full' }
    ]),
  ],
 providers:[ProductShopCountService],
  declarations: [ProductShopCountComponent,
    ProductShopCountListComponent, 
    ProductShopCountEditComponent,
    DialogResult,
    ProductShopCountDialogComponent
  ],
  entryComponents:[DialogResult, ProductShopCountDialogComponent]
})
export class ProductshopcountModule { }
