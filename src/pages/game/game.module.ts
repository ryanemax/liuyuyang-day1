import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { GameListPageComponent } from './game-list-page/game-list-page.component';
import { GameInsertPageComponent } from './game-insert-page/game-insert-page.component';
import { GameUpdatePageComponent } from './game-update-page/game-update-page.component';

import { GameService } from './game.service';
import { GameItemComponent } from './game-item/game-item.component';
import { GameEditComponent } from './game-edit/game-edit.component';

import { MaterialModule } from "@angular/material"

@NgModule({
  imports: [
    CommonModule,MaterialModule,FormsModule,
    RouterModule.forChild([
      { path: '', component: GameListPageComponent, pathMatch: 'full' },
      { path: 'insert', component: GameInsertPageComponent, pathMatch: 'full' },
      { path: 'update/:id', component: GameUpdatePageComponent, pathMatch: 'full' }
    ])
  ],
  providers:[GameService],
  declarations: [GameListPageComponent,GameItemComponent,GameInsertPageComponent,GameUpdatePageComponent,GameEditComponent]
})
export class GameModule { }
