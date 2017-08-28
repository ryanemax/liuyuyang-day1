import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { GameService } from '../game.service';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit {
  @Input() game: Game;
  gameObj:Game = {
    type:'WG',
    gameName:'',
    gameImage:'qjnn.png',
    lastReleaseDate:new Date(),
    downloads:0,
    price:0,
  }
  constructor(private route: ActivatedRoute,private gameServ: GameService) {
    if(gameServ.editObject){
      this.gameObj = gameServ.editObject
      console.log(this.gameObj);
    }
  }

  back(){
    this.gameServ.back();
  }

  save(){
    if(this.gameObj.type==""||this.gameObj.gameName==""||this.gameObj.gameImage==""||this.gameObj.lastReleaseDate.toString()==""){
      alert("信息不完整，请检查 in app-game-edit-tag")
      return
    }
    this.gameServ.saveGame(this.gameObj).subscribe();
    this.back();
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.gameServ.getGameById(id).subscribe(game=>{
        this.gameObj = game;
      })
    });
  }

}
