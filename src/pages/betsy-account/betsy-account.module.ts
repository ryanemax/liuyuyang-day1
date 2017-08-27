import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AccountPageComponent } from './account-page/account-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AccountPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [AccountPageComponent]
})
export class BetsyAccountModule { }
