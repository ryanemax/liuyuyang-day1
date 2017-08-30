import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdNativeDateModule } from "@angular/material"
import { FormsModule } from '@angular/forms';

import { FastMailHomeComponent } from './fast-mail-home/fast-mail-home.component';
import { FastMailItemComponent } from './fast-mail-item/fast-mail-item.component';
import { FastMailEditComponent } from './fast-mail-edit/fast-mail-edit.component';
import { FastMailAnalysisComponent } from './fast-mail-analysis/fast-mail-analysis.component';

import { BtnFastMailDirective } from './btn-fast-mail.directive';

import { FastMailService } from './fast-mail.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MdNativeDateModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: FastMailHomeComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: FastMailEditComponent, pathMatch: 'full'},
      { path: 'analysis', component: FastMailAnalysisComponent, pathMatch: 'full'},
    ])
  ],
  declarations: [
    FastMailHomeComponent,
    BtnFastMailDirective,
    FastMailItemComponent,
    FastMailEditComponent,
    FastMailAnalysisComponent,
  ],
  providers: [FastMailService]
})
export class FastMailModule { }
