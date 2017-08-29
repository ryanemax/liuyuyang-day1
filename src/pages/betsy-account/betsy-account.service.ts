import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';



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
    this.getContactById("44VpzQwmbo").subscribe(data=>{
      console.log(data)
    })
  }

 
  getAccountByName(name):Observable<Account>{
    // let account = this.accounting.find(item=>item.event == name)
    // return Observable.of(account)
    return
  }

  getContactById(id):Observable<Account>{
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
      updateAccount(newaccount){
        // this.http.put()
      }
      deleteById(id){
        // this.http.delete()
      }
}
