import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material"

@NgModule({
  imports: [
    CommonModule,
    SharedModule,MaterialModule,
    RouterModule.forChild([
      { path: '', component: ContactListComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [ContactListComponent]
})
export class ContactModule { }