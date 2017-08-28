import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { GameListPageComponent } from '../game/game-list-page/game-list-page.component';
import { GameItemComponent } from '../game/game-item/game-item.component';
import { GameInsertComponent } from './game-insert/game-insert.component';
import { GameUpdateComponent } from './game-update/game-update.component';
import { GameService } from './game.service';

import { MaterialModule } from "@angular/material"

@NgModule({
  imports: [
    CommonModule,MaterialModule,FormsModule,
    RouterModule.forChild([
      { path: '', component: GameListPageComponent, pathMatch: 'full' },
      { path: 'insert', component: GameInsertComponent, pathMatch: 'full' },
      { path: 'update/:id', component: GameUpdateComponent, pathMatch: 'full' }
    ])
  ],
  providers:[GameService],
  declarations: [GameListPageComponent,GameItemComponent,GameInsertComponent,GameUpdateComponent]
})
export class GameModule { }
