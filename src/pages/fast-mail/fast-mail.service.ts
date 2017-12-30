import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Parse } from '../../cloud/cloud';

@Injectable()
export class FastMailService {
  goodList: Array<Good>;

  // HTTP Params
  authHeaders: Headers = new Headers();
  host = "http://dev.futurestack.cn:80/parse";
  className = "FastMail";

  constructor(private http: Http) {
    this.authHeaders.append("X-Parse-Application-Id","dev");
    this.authHeaders.append("X-Parse-Master-Key","angulardev");
    this.authHeaders.append("Content-Type","application/json");
   }

  getGoods(): Observable<Array<Good>>{
    // let url = this.host+"/classes/" + this.className;
    // let options = {
    //   headers:this.authHeaders
    // };

    // return this.http
    // .get(url, options)
    // .map(data=>data.json().results);
    let query = new Parse.Query(this.className, this.http);
    return query.find();
  }

  addGoods(good: Good): Observable<any> {
    let url = this.host + "/classes/" + this.className;
    let options = {
      headers: this.authHeaders
    };

    return this.http
    .post(url, good, options)
    .map(data=>data.json());
  }

  deleteGoodsById(id: string): Observable<any> {
    let url = this.host+"/classes/" + this.className + "/" + id;
    let options = {
      headers:this.authHeaders
    };

    return this.http
    .delete(url, options)
    .map(data => data.json);
  }

  getGoodsById(id: string): Observable<any> {
    // let url = this.host + "/classes/" + this.className + "/" + id;
    // let options = {
    //   headers: this.authHeaders
    // };
    
    // return this.http
    // .get(url, options)
    // .map(data => data.json());
    let query = new Parse.Query(this.className, this.http);
    return query.get(id);
  }

  updateGoods(good: Good): Observable<any> {
    let tmpGood: Good = {
      name: good.name, tel: good.tel, addr: good.addr, date: good.date
    };
    let url = this.host + "/classes/" + this.className + "/" + good.objectId;
    let options = {
      headers: this.authHeaders
    };

    return this.http
    .put(url, tmpGood, options)
    .map(data => data.json());
  }

  getListLength(): number {
      return this.goodList.length;
  }

  onAscSortClick(): void {
    this.goodList.sort((g1, g2) => {
        return g1.objectId < g2.objectId ? 0 : 1;
    });
  }

  onDescSortClick(): void {
    this.goodList.sort((g1, g2) => {
      return g1.objectId < g2.objectId ? 1 : 0;
    });
  }

  onRandomSortClick(): void {
    this.goodList.sort((g1, g2) => {
      let tmp1 = Math.random();
      let tmp2 = Math.random();
      return tmp1 < tmp2 ? 1 : 0;
    });
  }

}
