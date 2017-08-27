import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerRankingPageComponent } from '../../pages/player-ranking/player-ranking-page/player-ranking-page.component';
import { ZsButtonComponent } from './zs-button/zs-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PlayerRankingPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [ZsButtonComponent, PlayerRankingPageComponent]
})
export class PlayerRankingModule { }
