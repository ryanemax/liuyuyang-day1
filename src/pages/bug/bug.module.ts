import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BugListPageComponent } from './bug-list-page/bug-list-page.component';
import { BugDetailPageComponent } from './bug-detail-page/bug-detail-page.component';
import { BugItemComponent } from './bug-item/bug-item.component';

import { BugService } from "./bug.service"

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BugListPageComponent, pathMatch: 'full' },
      { path: 'detail', component: BugDetailPageComponent, pathMatch: 'full' }
    ])
  ],
  providers: [BugService],
  declarations: [BugListPageComponent, BugDetailPageComponent, BugItemComponent]
})
export class BugModule { }
