import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from "./home-page/home-page.component"
import { AboutPageComponent } from "./about-page/about-page.component"

import { AddMerchantPageComponent } from "./add-merchant-page/add-merchant-page.component"
import { EditMerchantPageComponent } from "./edit-merchant-page/edit-merchant-page.component"
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'edit', component: EditMerchantPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [HomePageComponent,AboutPageComponent,AddMerchantPageComponent,EditMerchantPageComponent]
})
export class SnackModule { }
