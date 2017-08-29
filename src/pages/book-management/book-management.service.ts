import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers } from '@angular/http';

import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class BookManagementService {
    // HTTP Params
    authHeaders:Headers = new Headers()
    host = "http://47.92.145.25:2337/parse"
    className = "MyBook"

  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")
  }

  getBookById(id):Observable<JianglunBook>{

    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json())
  }

  getBooks():Observable<Array<JianglunBook>>{
    
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http.get(url,options).map(data=>data.json().results)
  }

  saveBook(book){
    // this.http.post()
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }
    
    if(book.objectId){
      let id = book.objectId
      delete book.createdAt
      delete book.updatedAt
      delete book.objectId
      delete book.ACL

      return this.http
      .put(url+"/"+id,book,options)
      .map(data=>data.json())
    }else{
      return this.http
      .post(url,book,options)
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
