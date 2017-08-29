import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  @Input() game: any;
  games: Array<Game>;
  constructor(private gameServ: GameService, private loc: Location) { }

  delete(game){
    this.gameServ.delectById(game.objectId).subscribe();
    this.gameServ.getGames().subscribe(data=>{
      location.href = "/game"
    });
  }

  ngOnInit() {
  }

}
