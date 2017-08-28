import { Component, OnInit } from '@angular/core';

import { GameService } from "../game.service"

@Component({
  selector: 'app-game-list-page',
  templateUrl: './game-list-page.component.html',
  styleUrls: ['./game-list-page.component.scss']
})
export class GameListPageComponent implements OnInit {
  games: Array<any>;
  constructor(private gameServ: GameService) {
    this.games = this.gameServ.games;
  }
  showAll(){
    this.games = this.gameServ.getGames();
  }
  
  descByDownloads(){
    this.gameServ.descByDownloads();
  }

  descByDate(){
    this.gameServ.descByDate();
  }

  showFree(){
    this.games = this.gameServ.showFree();
  }
  
  ngOnInit() {
  }

}
