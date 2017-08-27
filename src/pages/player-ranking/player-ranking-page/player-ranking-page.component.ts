import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-player-ranking-page',
  templateUrl: './player-ranking-page.component.html',
  styleUrls: ['./player-ranking-page.component.scss']
})
export class PlayerRankingPageComponent implements OnInit {


  players:Array<Player>;
  firstLine:string;
  constructor() {
   this.getPlayers()
  }
  
  

  ngOnInit() {
  }

}
