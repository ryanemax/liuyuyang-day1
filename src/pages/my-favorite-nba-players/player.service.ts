import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService {
  // HTTP Params
  authHeaders: Headers = new Headers()
  // host = "http://localhost:1337/parse"
  host = "http://dev.futurestack.cn:80/parse"

  className = "NBAPlayer"

  players: Array<Player>;
  editObject: Player;
  currentIndex: number = 5;

  constructor(private http: Http) {
    this.authHeaders.append("X-Parse-Application-Id", "dev")
    this.authHeaders.append("X-Parse-Master-Key", "angulardev")
    this.authHeaders.append("Content-Type", "application/json")
  }

  getPlayerByIndex(index): Observable<Player> {
    let player = this.players.find(item => item.index == index)
    return Observable.of(player)
  }

  fillPlayers(): Observable<Array<Player>> {
    let url = this.host + "/classes/" + this.className
    let options = {
      headers: this.authHeaders
    }

    this.http
      .get(url, options)
      .map(data => data.json().results).subscribe(data => {
        this.players = data
      })

    return this.http
      .get(url, options)
      .map(data => data.json().results)
  };

  addNewPlayer(player: Player) {
    player.index = this.currentIndex + 1;
    this.currentIndex = player.index;

    let url = this.host + "/classes/" + this.className
    let options = {
      headers: this.authHeaders
    }
    let body = {
      "index": Number(player.index),
      "name": player.name,
      "abilityScore": Number(player.abilityScore),
      "salary": Number(player.salary)
    }

    this.http.post(url, JSON.stringify(body), options)
      .map(data => data.json())
      .subscribe(function (data) {
        console.log(data)
      })
  }

  updatePlayer(player: Player) {
    let url = this.host + "/classes/" + this.className
    let options = {
      headers: this.authHeaders
    }
    let body = {
      "index": Number(player.index),
      "name": player.name,
      "abilityScore": Number(player.abilityScore),
      "salary": Number(player.salary)
    }

    return this.http
      .put(url + "/" + player.objectId, JSON.stringify(body), options)
      .map(data => data.json()).subscribe()
  }

  delete(player: Player) {
    let url = this.host + "/classes/" + this.className + "/" + player.objectId
    let options = {
      headers: this.authHeaders
    }

    this.http.delete(url, options)
      .map(data => data.json()).subscribe()
  }

}
