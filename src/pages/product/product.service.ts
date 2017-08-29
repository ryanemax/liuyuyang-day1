import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Parse } from '../../cloud/cloud';
Parse.initialize("dev","http://localhost:1337/parse")

@Injectable()
export class ProductService {
   // HTTP Params
   authHeaders:Headers = new Headers()
   host = "http://localhost:1337/parse"
   className = "Product"

  //products:Array<Product>;
  editObject:Product;
  constructor(private http:Http) {
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")
    this.getProductById("lnsiFK5Eip").subscribe(data=>{
      console.log(data)
    })
  }
 //getProductByBrand(brand):Observable<Product>{
  //let product = this.products.find(item=>item.brand == brand)
  //return Observable.of(product)
//}
getProductById(id):Observable<any>{
  // let contact = this.contacts.find(item=>item.name == name)
  // return Observable.of(contact)

  // let url = this.host+"/classes/" + this.className + "/" + id
  // let options = {
  //   headers:this.authHeaders
  // }

  // return this.http
  // .get(url,options)
  // .map(data=>data.json())
  let query = new Parse.Query("Product",this.http)
  return query.get(id)

}
getProducts():Observable<Array<Product>>{
  
      // let url = this.host+"/classes/" + this.className
      // let options = {
      //   headers:this.authHeaders
      // }
  
      // return this.http
      // .get(url,options)
      // .map(data=>data.json().results)
      let query = new Parse.Query("Product",this.http)
      return query.find()
    }

    saveProduct(jumeiProduct){
      // this.http.post()
      let url = this.host+"/classes/" + this.className
      let options = {
        headers:this.authHeaders
      }
      
      if(jumeiProduct.objectId){
        let id = jumeiProduct.objectId
        delete jumeiProduct.createdAt
        delete jumeiProduct.updatedAt
        delete jumeiProduct.objectId
        delete jumeiProduct.ACL
  
        return this.http
        .put(url+"/"+id,jumeiProduct,options)
        .map(data=>data.json())
      }else{
        return this.http
        .post(url,jumeiProduct,options)
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
