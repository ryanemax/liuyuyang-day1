import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerRankingPageComponent } from '../../pages/player-ranking/player-ranking-page/player-ranking-page.component';
import { ZsButtonComponent } from './zs-button/zs-button.component';
import { PlayerEditPageComponent } from './player-edit-page/player-edit-page.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { PlayerService } from "./player.service"

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PlayerRankingPageComponent, pathMatch: 'full' }
    ])
  ],
  providers:[PlayerService],
  declarations: [ZsButtonComponent, PlayerRankingPageComponent, PlayerEditPageComponent, PlayerInfoComponent]
})
export class PlayerRankingModule { }
