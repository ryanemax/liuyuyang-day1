import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FastMailHomeComponent } from './fast-mail-home/fast-mail-home.component';

import { BtnFastMailDirective } from './btn-fast-mail.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FastMailHomeComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    FastMailHomeComponent,
    BtnFastMailDirective,
  ]
})
export class FastMailModule { }
