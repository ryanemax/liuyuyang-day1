import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

import { Parse } from '../../cloud/cloud';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductShopCountService {
 // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "ProductShop"

 // products:Array<ProductShop>;
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  editObject:ProductShop;
  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")

    this.refresh()
  }
  getProductByProductCode(product_code):Observable<ProductShop>{
    // let product = this.products.find(item=>item.product_code ==product_code)
    // return Observable.of(product)
    return
  }

  getProductShopById(id):Observable<any>{
    let query = new Parse.Query("ProductShop",this.http)
    return query.get(id)
  }

  getProducts():Observable<Array<ProductShop>>{
    let query = new Parse.Query("ProductShop",this.http)
    return query.find()
  }

    connect(){
    return this.dataChange
  }
  refresh(){
      this.getProducts().subscribe(data=>{
          console.log(data)
          this.dataChange.next(data);
      })
  }

  saveProductShop(ProductShop){
      // this.http.post()
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

// start filter fileds
// end of filter

  if(ProductShop.addDate&&!ProductShop.addDate.__type){
      ProductShop.addDate = {
        __type:"Date",
        iso: new Date(ProductShop.addDate)
      }
    }

    if(ProductShop.objectId){
      let id = ProductShop.objectId
      delete ProductShop.createdAt
      delete ProductShop.updatedAt
      delete ProductShop.objectId
      delete ProductShop.ACL

      return this.http
      .put(url+"/"+id,ProductShop,options)
      .map(data=>data.json())
     }else{
      return this.http
      .post(url,ProductShop,options)
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
    .subscribe(data=>{
      let products = this.dataChange.value
      products.forEach((item,index,arr)=>{
        if(item.objectId == id){
          arr.splice(index,1)
        }
      })
      this.dataChange.next(products)
    })
  }
}














