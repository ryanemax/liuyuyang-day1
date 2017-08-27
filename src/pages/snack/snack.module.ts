import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material"
import { ListMerchantPageComponent } from "./list-merchant-page/list-merchant-page.component"
import { AboutPageComponent } from "./about-page/about-page.component"
import { SnackService } from "./snack.service"
import { EditMerchantPageComponent } from "./edit-merchant-page/edit-merchant-page.component"
@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MaterialModule,
    RouterModule.forChild([
      { path: '', component: ListMerchantPageComponent, pathMatch: 'full' },
      { path: 'edit/:name', component: EditMerchantPageComponent, pathMatch: 'full' },
    ])
  ],
  providers:[SnackService],
  declarations: [ListMerchantPageComponent,AboutPageComponent,EditMerchantPageComponent]
})
export class SnackModule { }
