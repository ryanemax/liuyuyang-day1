import {
  Injectable
} from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';




@Injectable()
export class PlayerService {
  players: Array<FootballPlayer>;
  editObject: FootballPlayer;

  constructor(private http:Http) {
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")
  }


  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "FootballPlayer"

  getPlayers() :Observable<Array<FootballPlayer>>{
    let url = this.host+"/classes/" + this.className
          let options = {
            headers:this.authHeaders
          }
      
          return this.http
          .get(url,options)
          .map(data=>data.json().results)
  }
 


  

  getPlayerByName(name) :Observable<FootballPlayer>{
    // let player = this.players.find(item=>item.name == name)
    return 
  }

  getPlayerById(id) :Observable<FootballPlayer>{
    // let player = this.players.find(item=>item.name == name)
    // return Observable.of(player)

    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json())
  }


  deleteByName(name) {
    this.players.forEach((item, index, arr) => {
      if (item.name == name) {
        arr.splice(index, 1)
      }
    })
  }

  savePlayer(player){
    // this.http.post()
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }
    
    if(player.objectId){
      let id = player.objectId
      delete player.createdAt
      delete player.updatedAt
      delete player.objectId
      delete player.ACL

      return this.http
      .put(url+"/"+id,player,options)
      .map(data=>data.json())
    }else{
      return this.http
      .post(url,player,options)
      .map(data=>data.json())
    }
  }



  deleteById(id){
    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .delete(url,options)
    .map(data=>data.json())
  }

  



  

}
