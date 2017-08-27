import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ContactListComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [ContactListComponent]
})
export class ContactModule { }
