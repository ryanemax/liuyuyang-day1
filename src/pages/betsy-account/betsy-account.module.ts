import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AccountPageComponent } from './account-page/account-page.component';
import { MaterialModule } from "@angular/material"
import { AccountItemComponent } from './account-item/account-item.component';

import { BetsyAccountService } from "./betsy-account.service"
import { AccoundCardDirective } from './accound-card.directive'
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: AccountPageComponent, pathMatch: 'full' },
    ])
  ],
  providers:[BetsyAccountService],
  declarations: [AccountPageComponent,AccountItemComponent,AccoundCardDirective]
})
export class BetsyAccountModule { }
