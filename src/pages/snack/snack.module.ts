import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { MatButtonModule } from "@angular/material"
import { ListMerchantPageComponent } from "./list-merchant-page/list-merchant-page.component"
import { AboutPageComponent } from "./about-page/about-page.component"
import { SnackService } from "./snack.service"
import { EditMerchantPageComponent } from "./edit-merchant-page/edit-merchant-page.component"
@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MatButtonModule,
    RouterModule.forChild([
      { path: '', component: ListMerchantPageComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: EditMerchantPageComponent, pathMatch: 'full' },
      { path: 'about', component: AboutPageComponent, pathMatch: 'full' }
    ])
  ],
  providers:[SnackService],
  declarations: [ListMerchantPageComponent,AboutPageComponent,EditMerchantPageComponent]
})
export class SnackModule { }
