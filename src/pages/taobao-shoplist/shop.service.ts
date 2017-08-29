import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ShopService {
  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "shoplist"
  // shops:Array<Shop>;
  editObject:Shop;
  size=0;
  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")

   this.getShops().subscribe(data=>{
         this.size = data.length;
       })
  }
  getShopByName(productName):Observable<Shop>{
    // let shop = this.shops.find(item=>item.productName == productName)
    // return Observable.of(shop)
    return
  }
  getShopById(id):Observable<Shop>{
    // let shop = this.shops.find(item=>item.productName == productName)
    // return Observable.of(shop)
    console.log("xxxx"+id);
    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json())
  }
  getShops():Observable<Array<Shop>>{

    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results)
  }
  
  saveShop(shop){
    // this.http.post()
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }
    
    if(shop.objectId){
      let id = shop.objectId
      delete shop.createdAt
      delete shop.updatedAt
      delete shop.objectId
      delete shop.ACL

      return this.http
      .put(url+"/"+id,shop,options)
      .map(data=>data.json())
    }else{
     
      shop.index=this.size+1;
      this.size = this.size+1;
      return this.http
      .post(url,shop,options)
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

