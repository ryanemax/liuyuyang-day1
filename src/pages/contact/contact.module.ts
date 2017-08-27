import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material"

import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

import { ContactService } from "./contact.service"


@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MaterialModule,
    RouterModule.forChild([
      { path: '', component: ContactListComponent, pathMatch: 'full' },
      { path: 'edit/:name', component: ContactEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[ContactService],
  declarations: [ContactListComponent,ContactItemComponent,ContactEditComponent]
})
export class ContactModule { }
