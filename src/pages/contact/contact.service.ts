import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';


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
  }
  getContactByName(name):Observable<Contact>{
    // let contact = this.contacts.find(item=>item.name == name)
    // return Observable.of(contact)
    return
  }
  getContactById(id):Observable<Contact>{
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

  saveContact(contact){
    // this.http.post()
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    if(contact.birth&&!contact.birth.__type){
      contact.birth = {
        __type:"Date",
        iso: new Date(contact.birth)
      }
    }
    
    if(contact.objectId){
      let id = contact.objectId
      delete contact.createdAt
      delete contact.updatedAt
      delete contact.objectId
      delete contact.ACL

      return this.http
      .put(url+"/"+id,contact,options)
      .map(data=>data.json())
    }else{
      return this.http
      .post(url,contact,options)
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
