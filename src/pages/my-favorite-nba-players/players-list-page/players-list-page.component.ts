import { Component, OnInit } from '@angular/core';

interface Player {
  index: number,
  name: string,
  abilityScore: number,
  salary?: number
}

@Component({
  selector: 'app-players-list-page',
  templateUrl: './players-list-page.component.html',
  styleUrls: ['./players-list-page.component.scss']
})
export class PlayersListPageComponent implements OnInit {

  players: Array<Player>;
  
    constructor() {
      this.fillPlayers();
    };
  
    ngOnInit() {
    };
  
    fillPlayers() {
      this.players = [
        { index: 1, name: "Kobe Bean Bryant", abilityScore: 99, salary: 9999 },
        { index: 2, name: "Steve Nash", abilityScore: 95 },
        { index: 3, name: "Allen Iverson", abilityScore: 90 },
        { index: 4, name: "Jason Williams", abilityScore: 88 },
        { index: 5, name: "Stephen Curry", abilityScore: 80 }
      ]
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

}
