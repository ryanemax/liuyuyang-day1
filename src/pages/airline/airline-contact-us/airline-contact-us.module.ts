import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AirlineContactUsComponent } from './airline-contact-us/airline-contact-us.component';
@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild([
      { path: '', component: AirlineContactUsComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [AirlineContactUsComponent]
})
export class AirlineContactUsModule { }
