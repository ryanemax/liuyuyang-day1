import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class PlayerService {
  players: Array<Player>;
  editObject: Player;
  currentIndex: number;

  constructor() {
    this.fillPlayers();
    this.currentIndex = this.players.length;
  }

  getPlayerByIndex(index): Observable<Player> {
    let player = this.players.find(item => item.index == index)
    return Observable.of(player)
  }

  fillPlayers() {
    this.players = [
      { index: 1, name: "Kobe Bean Bryant", abilityScore: 99, salary: 9999 },
      { index: 2, name: "Steve Nash", abilityScore: 95 },
      { index: 3, name: "Allen Iverson", abilityScore: 90 },
      { index: 4, name: "Jason Williams", abilityScore: 88 },
      { index: 5, name: "Stephen Curry", abilityScore: 80 }
    ]
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

  addNewPlayer(player) {
    player.index = this.currentIndex + 1;
    this.players.push(player);
    this.currentIndex = player.index;
  }

  delete(player: Player) {
    this.players.forEach((item, index, arr) => {
      if (item.index == player.index) {
        arr.splice(index, 1)
      }
    })
  }

}
