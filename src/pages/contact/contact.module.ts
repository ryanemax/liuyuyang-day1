import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material";
import { SharedEditModule } from "../../shared-edit/shared-edit.module";

import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactEditComponent,DialogResult } from './contact-edit/contact-edit.component';

import { ContactEditDialogComponent } from './contact-edit-dialog/contact-edit-dialog.component';

import { ContactService } from "./contact.service"

@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,SharedEditModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: ContactListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: ContactEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[ContactService],
  declarations: [ContactListComponent,ContactItemComponent,
  ContactEditComponent,
  DialogResult,
  ContactEditDialogComponent],
  entryComponents:[DialogResult,ContactEditDialogComponent]
})
export class ContactModule { }
