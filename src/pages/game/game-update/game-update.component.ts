import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { GameService } from '../game.service';

@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.component.html',
  styleUrls: ['./game-update.component.scss']
})
export class GameUpdateComponent implements OnInit {
  object:Game = {
    id: 0,
    type:'',
    gameName:'',
    gameImage:'',
    updateDate:new Date(),
    downloads:0,
    price:0,
  }
  constructor(private route: ActivatedRoute,private gameServ: GameService) {
    console.log('constructor...'+gameServ.editObject);
    if(gameServ.editObject){
      this.object = gameServ.editObject
    }
  }
  back(){
    this.gameServ.back();
  }

  ngOnInit() {
    console.log('ngOnInit...');
    this.route.params.subscribe(params=>{
      let id = params['id'];
      console.log('id...'+id);
      this.gameServ.getGameById(id).subscribe(game=>{
        this.object = game;
      })
    });
  }

  save(){
    if(this.object.type==""||this.object.gameName==""||this.object.gameImage==""||this.object.updateDate.toString()==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    this.gameServ.saveGame(this.object);
    this.back();
  }
}
