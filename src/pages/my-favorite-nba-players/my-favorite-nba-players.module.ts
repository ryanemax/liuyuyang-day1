import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PlayersListPageComponent } from './players-list-page/players-list-page.component';

// 引入第三方共享模块
import { MaterialModule } from "@angular/material";

@NgModule({ 
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PlayersListPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [PlayersListPageComponent]
})
export class MyFavoriteNbaPlayersModule { }
