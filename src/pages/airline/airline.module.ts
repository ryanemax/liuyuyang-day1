import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AirlinePageComponent } from './airline-page/airline-page.component';
import { AirlineListComponent } from './airline-list/airline-list/airline-list.component';
import { AirlineContactUsComponent } from './airline-contact-us/airline-contact-us/airline-contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AirlineListComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [AirlinePageComponent,AirlineListComponent,AirlineContactUsComponent]
})
export class AirlineModule { }
