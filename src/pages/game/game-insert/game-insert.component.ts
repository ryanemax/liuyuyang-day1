import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-insert',
  templateUrl: './game-insert.component.html',
  styleUrls: ['./game-insert.component.scss']
})
export class GameInsertComponent implements OnInit {
  object:Game = {
    type:'WG',
    gameName:'',
    gameImage:'qjnn.png',
    lastReleaseDate:new Date(),
    downloads:0,
    price:0,
  }
  constructor(private gameServ: GameService) { 
    if(gameServ.editObject){
      this.object = gameServ.editObject
    }
  }

  ngOnInit() {
  }

  back(){
    this.gameServ.back();
  }

  save(){
    if(this.object.type==""||this.object.gameName==""||this.object.gameImage==""||this.object.lastReleaseDate.toString()==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    this.gameServ.insertGame(this.object);
    this.back();
  }
}
