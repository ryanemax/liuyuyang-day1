import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map';

@Injectable()
export class GoodsShopService {
  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "GoodsInfo"

  editObject:Item;
  constructor(private http:Http) {
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")
  }

  getGoods(){
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results)
  }

  getContactById(id){
    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json())
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

  deleteById(id){
    let url = this.host+"/classes/" + this.className+"/"+ id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .delete(url, options)
  }

}
