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
    this.playerServ.getPlayers().subscribe(data=>{
      this.players = data
    })
  }
  



  goalSort() {
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.players.sort((a, b) => {
      if (a.goal > b.goal) {
        return -1
      } else {
        return 1
      }
    })
  }


  assistSort() {
    // 逆序排列   
    this.players.sort((a, b) => {
      if (a.assist > b.assist) {
        return -1
      } else {
        return 1
      }
    })
  }
  random() {
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.players.forEach(item => {
      item.random = Math.random();

    })
    this.players.sort((a, b) => {
      if (a.random > b.random) {
        return 1
      } else {
        return -1
      }
    })
  }

  ngOnInit() {
  }

}
