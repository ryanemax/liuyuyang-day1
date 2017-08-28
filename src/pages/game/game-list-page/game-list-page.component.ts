import { Component, OnInit } from '@angular/core';

import { GameService } from "../game.service"

@Component({
  selector: 'app-game-list-page',
  templateUrl: './game-list-page.component.html',
  styleUrls: ['./game-list-page.component.scss']
})
export class GameListPageComponent implements OnInit {
  games: Array<Game>;
  constructor(private gameServ: GameService) {
    this.showAll();
  }
  showAll(){
    this.gameServ.getGames().subscribe(data => {
      this.games = data;
    });
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
