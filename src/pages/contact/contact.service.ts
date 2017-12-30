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
export class ContactService {
  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://dev.futurestack.cn:80/parse"
  className = "ContactUser"
  // contacts:Array<Contact>;
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  editObject:Contact;
  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")

    this.refresh()
  }
  getContactByName(name):Observable<Contact>{
    // let contact = this.contacts.find(item=>item.name == name)
    // return Observable.of(contact)
    return
  }
  getContactById(id):Observable<any>{
    let query = new Parse.Query("ContactUser",this.http)
    return query.get(id)
  }
  getContacts():Observable<Array<Contact>>{
    let query = new Parse.Query("ContactUser",this.http)
    return query.find()
  }
  connect(){
    return this.dataChange
  }
  refresh(){
      this.getContacts().subscribe(data=>{
          console.log(data)
          this.dataChange.next(data);
      })
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
    .subscribe(data=>{
      let contacts = this.dataChange.value
      contacts.forEach((item,index,arr)=>{
        if(item.objectId == id){
          arr.splice(index,1)
        }
      })
      this.dataChange.next(contacts)
    })
  }
}
