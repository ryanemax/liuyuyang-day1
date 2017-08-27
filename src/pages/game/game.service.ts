import { Injectable } from '@angular/core';

interface Game{
  type:string,
  gameName:string,
  gameImage:string,
  updateDate:Date,
  downloads:number,
  price:number,
  random?:number
}

@Injectable()
export class GameService {
  games: Array<Game>;
  constructor() {
    this.getGames();
  }

  getGames(){
    this.games = [
      {type: '网游', gameName: '奇迹mu', gameImage: 'qijimu.png', updateDate: new Date, downloads: 200000, price: 0},
      {type: '网游', gameName: '传奇世界', gameImage: 'cqsj.png', updateDate: new Date, downloads: 190000, price: 0},
      {type: '网游', gameName: '龙神契约', gameImage: 'lsqy.png', updateDate: new Date, downloads: 170000, price: 0},
      {type: '网游', gameName: '楚乔传', gameImage: 'cqz.png', updateDate: new Date, downloads: 150000, price: 0},
      {type: '网游', gameName: '九天封神', gameImage: 'jtfs.png', updateDate: new Date, downloads: 130000, price: 0},
      {type: '网游', gameName: '魔域永恒', gameImage: 'myyh.png', updateDate: new Date, downloads: 129999, price: 0}

      // {type: '手游', gameName: '奇迹暖暖', gameImage: 'qijimu.png', updateDate: new Date, downloads: 200000, price: 0},
      // {type: '手游', gameName: '弹弹堂', gameImage: 'cqsj.png', updateDate: new Date, downloads: 190000, price: 0},
      // {type: '手游', gameName: '王者', gameImage: 'lsqy.png', updateDate: new Date, downloads: 170000, price: 0},
      // {type: '手游', gameName: '楚乔传', gameImage: 'cqz.png', updateDate: new Date, downloads: 150000, price: 0},
      // {type: '手游', gameName: '九天封神', gameImage: 'jtfs.png', updateDate: new Date, downloads: 130000, price: 0},
      // {type: '手游', gameName: '魔域永恒', gameImage: 'myyh.png', updateDate: new Date, downloads: 129999, price: 0}
    ]

    return this.games;
  }

  ascByDownloads(){
    this.games.sort((a,b)=>{
      if(a.downloads>b.downloads){
        return 1
      }else{
        return -1
      }
    })
  }
  ascByDate(){
    this.games.sort((a,b)=>{
      if(a.updateDate>b.updateDate){
        return 1
      }else{
        return -1
      }
    })
  }
}
