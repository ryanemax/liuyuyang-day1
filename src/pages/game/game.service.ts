import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class GameService {
  gamesIndex = 9;
  games: Array<Game>;
  editObject: Game;
  constructor(private loc: Location) {
    this.getGames();
  }

  getGames(){
    this.games = [
      {id: 1, type: '网游', gameName: '奇迹mu', gameImage: 'qijimu.png', updateDate: new Date('2017-02-01'), downloads: 5, price: 0},
      {id: 2, type: '网游', gameName: '传奇世界', gameImage: 'cqsj.png', updateDate: new Date('2017-03-01'), downloads: 7, price: 0},
      {id: 3, type: '网游', gameName: '龙神契约', gameImage: 'lsqy.png', updateDate: new Date('2017-08-01'), downloads: 9, price: 0},
      {id: 4, type: '网游', gameName: '楚乔传', gameImage: 'cqz.png', updateDate: new Date('2017-04-20'), downloads: 2, price: 0},
      {id: 5, type: '网游', gameName: '九天封神', gameImage: 'jtfs.png', updateDate: new Date('2017-08-25'), downloads: 1, price: 0},
      {id: 6, type: '网游', gameName: '魔域永恒', gameImage: 'myyh.png', updateDate: new Date('2017-08-24'), downloads: 5, price: 5},
      {id: 7, type: '手游', gameName: '奇迹暖暖', gameImage: 'qjnn.png', updateDate: new Date('2017-07-01'), downloads: 1, price: 50},
      {id: 8, type: '手游', gameName: '弹弹堂', gameImage: 'ddt.png', updateDate: new Date('2016-08-31'), downloads: 6, price: 55},
      {id: 9, type: '手游', gameName: '王者荣耀', gameImage: 'wzry.png', updateDate: new Date('2015-08-31'), downloads: 9, price: 300},
    ]
    return this.games;
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
      if(a.updateDate>b.updateDate){
        return -1
      }else{
        return 1
      }
    })
  }
  showFree(){
    let freeList =  this.games.filter((item)=>{
      if(item.price == 0){
        return item;
      }
    })
    this.games = freeList;
    return freeList
  }

  back(){
    this.loc.back();
  }

  insertGame(game){
    this.gamesIndex++;
    game.id = this.gamesIndex;
    this.games.push(game);
  }

  saveGame(game){
    this.games.forEach((item,index,arr)=>{
      if(item.id == game){
        item.gameName = game.gameName;
        item.updateDate = game.updateDate;
        item.price = game.price;
        return;
      }
    })
  }

  delectById(id){
    this.games.forEach((item,index,arr)=>{
      if(item.id == id){
        arr.splice(index,1)
      }
    })
  }

  getGameById(id):Observable<Game>{
    let game = this.games.find(item => item.id == id);
    console.log(game.gameName);
    return Observable.of(game);
  }

  save(){}
}
