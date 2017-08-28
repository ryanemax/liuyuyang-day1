import { Component, OnInit, Input } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  @Input() game: any;
  constructor(private gameServ: GameService) { }

  ngOnInit() {
  }

  update(game){
    
  }

  delete(game){
    this.gameServ.delectById(game.id);
  }

}
