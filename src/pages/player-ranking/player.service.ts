import {
  Injectable
} from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';




@Injectable()
export class PlayerService {
  players: Array<FootballPlayer>;
  editObject: FootballPlayer;

  constructor(private http:Http) {
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")


    this.getPlayerByName("SvsaxHrECT").subscribe(data=>{
      console.log(data)
    })
  }


  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:1337/parse"
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
 


  

  getPlayerByName(name):Observable<FootballPlayer>{
    let player = this.players.find(item=>item.name == name)
    return Observable.of(player)
  }

  getPlayerById(id):Observable<FootballPlayer>{
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
    console.log(name);
    this.players.forEach((item, index, arr) => {
      if (item.name == name) {
        arr.splice(index, 1)
      }
    })
  }

  addPlayer(player) {
    // this.http.post()
    this.players.push(player)
  }

  updatePlayer(player){
    // this.http.put()
  }


  deleteById(id){
    // this.http.delete()
  }

  



  

}
