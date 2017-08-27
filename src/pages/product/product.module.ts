import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductService } from "./product.service"
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { MaterialModule } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,MaterialModule,FormsModule,
    RouterModule.forChild([
      { path: '', component: ProductListPageComponent, pathMatch: 'full' },
      { path: 'edit/:brand', component: ProductEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[ProductService],
  declarations: [ProductEditComponent,ProductListPageComponent,ProductItemComponent]
})
export class ProductModule { }
