import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';


@Injectable()
export class BetsyAccountService {
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "Accounting"

  editObject:Account;
  constructor(private http:Http) {
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")
    // this.getAccountById("rZZuQmxpLk").subscribe(data=>{
     // console.log(data)
    // })
  }

  getAccountById(id):Observable<Account>{
    // let contact = this.contacts.find(item=>item.name == name)
    // return Observable.of(contact)

    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json())
  }

  getAccountingList():Observable<Array<Account>>{
    
        let url = this.host+"/classes/" + this.className
        let options = {
          headers:this.authHeaders
        }
    
        return this.http
        .get(url,options)
        .map(data=>data.json().results)
      }

      addAccount(newaccount){
        // this.http.post()
      }
      saveAccount(newaccount){
        let url = this.host+"/classes/" + this.className
        let options = {
          headers:this.authHeaders
        }
    
       //  if(newaccount.birth&&!newaccount.birth.__type){
        //  newaccount.birth = {
        //    __type:"Date",
          // iso: new Date(newaccount.birth)
        //  }
      //  }
        
        if(newaccount.objectId){
          let id = newaccount.objectId
          delete newaccount.createdAt
          delete newaccount.updatedAt
          delete newaccount.objectId
          delete newaccount.ACL
    
          return this.http
          .put(url+"/"+id,newaccount,options)
          .map(data=>data.json())
        }else{
          return this.http
          .post(url,newaccount,options)
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
