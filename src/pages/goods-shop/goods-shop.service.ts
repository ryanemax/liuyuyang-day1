import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/finally';

import { Parse } from '../../cloud/cloud';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class GoodsShopService {
  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://dev.futurestack.cn:80/parse"
  className = "GoodsInfo"
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  editObject:Item;
  constructor(private http:Http) {
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")

    this.refresh()
  }

  getGoods():Observable<Array<Item>>{
    // let url = this.host+"/classes/" + this.className
    // let options = {
    //   headers:this.authHeaders
    // }

    // return this.http
    // .get(url,options)
    // .map(data=>data.json().results)

    let query = new Parse.Query("GoodsInfo",this.http)
    return query.find()
  }

  getContactById(id):Observable<any>{
    // let url = this.host+"/classes/" + this.className + "/" + id
    // let options = {
    //   headers:this.authHeaders
    // }

    // return this.http
    // .get(url,options)
    // .map(data=>data.json())

    let query = new Parse.Query("GoodsInfo",this.http)
    return query.get(id)
  }

  addContact(item){
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .post(url, item, options) 
  }

  updateContact(item){
    let url = this.host+"/classes/" + this.className+"/"+ item.objectId
    console.log(item.objectId)
    let options = {
      headers:this.authHeaders
    }

    let date = {
      "name":item.name,
      "price":item.price,
      "tag":item.tag
    }

    return this.http
    .put(url, date, options)
  }

  connect(){
    return this.dataChange
  }
  refresh(){
      this.getGoods().subscribe(data=>{
          this.dataChange.next(data);
      })
  }

  deleteById(id){
    let url = this.host+"/classes/" + this.className+"/"+ id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .delete(url, options)
    .map(data=>data.json())
    .subscribe(data=>{
      let contacts = this.dataChange.value
      contacts.forEach((item,index,arr)=>{
        if(item.objectId == id){
          arr.splice(index,1)
        }
      })
      this.dataChange.next(contacts)
    })
  }

}
