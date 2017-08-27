import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlayersListPageComponent } from './players-list-page/players-list-page.component';
import { PlayersEditComponent } from './players-edit/players-edit.component'

// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material"

import { PlayerService } from "./player.service"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: PlayersListPageComponent, pathMatch: 'full' },
      { path: 'edit/:index', component: PlayersEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[PlayerService],
  declarations: [
    PlayersListPageComponent,
    PlayersEditComponent]
})
export class MyFavoriteNbaPlayersModule { }
