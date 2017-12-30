import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

import { Parse } from '../../cloud/cloud';
// Parse.initialize("dev","http://localhost:1337/parse")

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CookbookService {
  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://dev.futurestack.cn:80/parse"
  className = "Cookbook"
  // contacts:Array<Contact>;
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  editObject:Cookbook;
  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")

    this.refresh()
  }
 
  getCookbookById(id):Observable<any>{
    let query = new Parse.Query("Cookbook",this.http)
    return query.get(id)
  }
  getCookbook():Observable<Array<Cookbook>>{
    let query = new Parse.Query("Cookbook",this.http)
    return query.find()
  }
  connect(){
    return this.dataChange
  }
  refresh(){
      this.getCookbook().subscribe(data=>{
          console.log(data)
          this.dataChange.next(data);
      })
  }
  saveCookbook(cookbook){
    // this.http.post()
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    if(cookbook.createdate&&!cookbook.createdate.__type){
      cookbook.createdate = {
        __type:"Date",
        iso: new Date(cookbook.createdate)
      }
    }
    
    if(cookbook.objectId){
      let id = cookbook.objectId
      delete cookbook.createdAt
      delete cookbook.updatedAt
      delete cookbook.objectId
      delete cookbook.ACL

      return this.http
      .put(url+"/"+id,cookbook,options)
      .map(data=>data.json())
    }else{
      return this.http
      .post(url,cookbook,options)
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
      let cookbook = this.dataChange.value
      cookbook.forEach((item,index,arr)=>{
        if(item.objectId == id){
          arr.splice(index,1)
        }
      })
      this.dataChange.next(cookbook)
    })
  }
}
