import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountPageComponent } from './account-page/account-page.component';
import { AccountItemComponent } from './account-item/account-item.component';
import { AccountEditComponent,DialogResult } from './account-edit/account-edit.component';
import { AccountEditDialogComponent } from './account-edit-dialog/account-edit-dialog.component';
import { MaterialModule } from "@angular/material"
import { SharedModule } from "../../shared/shared.module";

import { BetsyAccountService } from "./betsy-account.service"

@NgModule({
  imports: [
    CommonModule,FormsModule,
    MaterialModule,SharedModule,
    RouterModule.forChild([
      { path: '', component: AccountPageComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: AccountEditComponent, pathMatch: 'full' },
    ])
  ],
  providers:[BetsyAccountService],
  declarations: [AccountPageComponent,AccountItemComponent,AccountEditComponent,
    AccountEditDialogComponent,
    DialogResult,],
  entryComponents:[DialogResult,AccountEditDialogComponent]

})
export class BetsyAccountModule { }
