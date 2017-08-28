import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class FastMailService {
  goodList: Array<Good>;

  // HTTP Params
  authHeaders: Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "FastMail"

  constructor(private http: Http) {
    this.authHeaders.append("X-Parse-Application-Id","dev");
    this.authHeaders.append("X-Parse-Master-Key","angulardev");
    this.authHeaders.append("Content-Type","application/json");
   }

  // initGoodData() {
  //   this.goodList = [
  //     {name: 'Lily', tel: '152-XXXX-8861', addr: 'DaLian Soft Park', date: '2017-3-23', index: 0},
  //     {name: 'Elizabeth', tel: '156-XXXX-7623', addr: 'DaLian Soft Park', date: '2017-6-15', index: 1},
  //     {name: 'Camille', tel: '189-XXXX-0959', addr: 'DaLian Soft Park', date: '2017-1-28', index: 2},
  //     {name: 'Christina', tel: '189-XXXX-8735', addr: 'DaLian Soft Park', date: '2017-8-6', index: 3},
  //     {name: 'Darcy', tel: '139-XXXX-9484', addr: 'DaLian Soft Park', date: '2017-9-26', index: 4}
  //   ];
  // }

  getGoods(): Observable<Array<Good>>{
    let url = this.host+"/classes/" + this.className;
    let options = {
      headers:this.authHeaders
    };

    return this.http
    .get(url, options)
    .map(data=>data.json().results);
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

  getGoodsById(id: string): Observable<Good> {
    let url = this.host + "/classes/" + this.className + "/" + id;
    let options = {
      headers: this.authHeaders
    };
    
    return this.http
    .get(url, options)
    .map(data => data.json());
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
