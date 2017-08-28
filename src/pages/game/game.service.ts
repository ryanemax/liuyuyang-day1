import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {
  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "Game"
  games: Array<Game>
  editObject: Game
  constructor(private loc: Location, private http: Http) {
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")
  }

  getGames():Observable<Array<Game>>{
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results)
  }

  showFree(){
    this.getGames().subscribe(data =>{
      data.filter(item=>{
        
      })
    })

    let freeList =  this.games.filter((item)=>{
      if(item.price == 0){
        return item;
      }
    })
    this.games = freeList;
    return freeList
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

  back(){
    this.loc.back();
  }

  insertGame(game){
    this.games.push(game);
  }

  saveGame(game){
    
  }

  delectById(id){
   
  }

  getGameById(id):Observable<Game>{
    let game = this.games.find(item => item.type == id);
    console.log(game.gameName);
    return Observable.of(game);
  }

  save(){}
}
