import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GameListPageComponent } from '../game/game-list-page/game-list-page.component';
import { GameItemComponent } from '../game/game-item/game-item.component';

import { GameService } from './game.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: GameListPageComponent, pathMatch: 'full' }
    ])
  ],
  providers:[GameService],
  declarations: [GameListPageComponent,GameItemComponent]
})
export class GameModule { }
