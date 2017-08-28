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
    this.refresh();
  };

  ngOnInit() {
  };

  sortList(type: string) {
    switch (type) {
      case "up":
        this.sortByASC();
        break;
      case "down":
        this.sortByDESC();
        break;
      default:
        this.sortByRandom();
    }
  };

  sortByASC() {
    this.players.sort((a, b) => {
      if (a.abilityScore < b.abilityScore) {
        return -1;
      } else if (a.abilityScore > b.abilityScore) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  sortByDESC() {
    this.players.sort((a, b) => {
      if (a.abilityScore < b.abilityScore) {
        return 1;
      } else if (a.abilityScore > b.abilityScore) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  sortByRandom() {
    this.players.sort((a, b) => {
      return Math.random() > 0.5 ? -1 : 1;
    });
  };

  delete(player) {
    this.playerService.delete(player);
    this.refresh();
  }

  refresh(){
    this.playerService.fillPlayers().subscribe(data => {
      this.players = data
      this.sortByIndexASC()
    })
  }

  sortByIndexASC() {
    this.players.sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      } else if (a.index > b.index) {
        return 1;
      } else {
        return 0;
      }
    });
  };
}
