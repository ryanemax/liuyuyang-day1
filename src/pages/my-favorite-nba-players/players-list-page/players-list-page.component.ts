import { Component, OnInit, Input } from '@angular/core';

import { PlayerService } from "../player.service"

@Component({
  selector: 'app-players-list-page',
  templateUrl: './players-list-page.component.html',
  styleUrls: ['./players-list-page.component.scss']
})
export class PlayersListPageComponent implements OnInit {
  @Input() player: Player

  players: Array<Player>

  constructor(private playerService: PlayerService) {
    this.players = this.playerService.players
  };

  ngOnInit() {
  };

  sortList(type: string) {
    switch (type) {
      case "up":
        this.playerService.sortByASC();
        break;
      case "down":
        this.playerService.sortByDESC();
        break;
      default:
        this.playerService.sortByRandom();
    }
  };

  delete(player){
    this.playerService.delete(player)
  }

}
