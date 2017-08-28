import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {
  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "ContactUser"
  // contacts:Array<Contact>;
  editObject:Contact;
  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")

    this.getContactById("SvsaxHrECT").subscribe(data=>{
      console.log(data)
    })
  }
  getContactByName(name):Observable<Contact>{
    // let contact = this.contacts.find(item=>item.name == name)
    // return Observable.of(contact)
    return
  }
  getContactById(id):Observable<Contact>{
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
  getContacts():Observable<Array<Contact>>{

    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results)
  }

  addContact(contact){
    // this.http.post()
  }
  updateContact(contact){
    // this.http.put()
  }
  deleteById(id){
    // this.http.delete()
  }

  

}
