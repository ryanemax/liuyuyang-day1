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

  showFree(){
    this.games = this.games.filter(item=>{
      if(item.price == 0){
        return item;
      }
    })
  }
  
  descByDownloads(){
    this.games.sort((a,b)=>{
      if(a.downloads>b.downloads){
        return -1
      }else{
        return 1
      }
    })
  }

  descByDate(){
    this.games.sort((a,b)=>{
      if(a.lastReleaseDate>b.lastReleaseDate){
        return -1
      }else{
        return 1
      }
    })
  }
  
  ngOnInit() {
  }

}
