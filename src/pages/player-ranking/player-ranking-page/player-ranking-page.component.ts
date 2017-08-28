import { Component, OnInit } from '@angular/core';

import { PlayerService } from "../player.service"



@Component({
  selector: 'app-player-ranking-page',
  templateUrl: './player-ranking-page.component.html',
  styleUrls: ['./player-ranking-page.component.scss']
})
export class PlayerRankingPageComponent implements OnInit {


  players:Array<FootballPlayer>;

  constructor(private playerServ:PlayerService) {
    this.players = this.playerServ.players;
  }
  
  goalSort(){
    this.playerServ.goalSort()
  }
  assistSort(){
    this.playerServ.assistSort()
  }
  random(){
    this.playerServ.random()
  }

  ngOnInit() {
  }

}
