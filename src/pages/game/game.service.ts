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
  host = "http://dev.futurestack.cn:80/parse"
  className = "Game"
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
    .get(url, options)
    .map(data=>data.json().results)
  }

  back(){
    this.loc.back();
  }

  saveGame(game){
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }
    
    if(game.objectId){
      let id = game.objectId
      delete game.createdAt
      delete game.updatedAt
      delete game.objectId
      delete game.ACL

      return this.http
      .put(url+"/"+id,game,options)
      .map(data=>data.json())
    }else{
      return this.http
      .post(url,game,options)
      .map(data=>data.json())
    }
  }

  delectById(id){
    let url = this.host+"/classes/" + this.className + '/' + id ;
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .delete(url, options)
    .map(data=>data.json());
  }

  getGameById(id):Observable<Game>{
    console.log(id);
    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }
    return this.http
    .get(url, options)
    .map(data=>data.json())
  }

}
