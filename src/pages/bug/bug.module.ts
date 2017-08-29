import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { BugListPageComponent } from './bug-list-page/bug-list-page.component';
import { BugDetailPageComponent } from './bug-detail-page/bug-detail-page.component';
import { BugItemComponent } from './bug-item/bug-item.component';

import { BugService } from "./bug.service"

import {MdButtonModule, MdInputModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: BugListPageComponent, pathMatch: 'full' },
      { path: 'detail', component: BugDetailPageComponent, pathMatch: 'full' },
      { path: 'detail/:objectId', component: BugDetailPageComponent, pathMatch: 'full' }
    ]),
    [MdButtonModule, MdInputModule]
  ],
  providers: [BugService],
  declarations: [BugListPageComponent, BugDetailPageComponent, BugItemComponent]
})
export class BugModule { }
