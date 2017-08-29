import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import { Http, Headers } from '@angular/http';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class SnackService {
    // HTTP Params
    authHeaders:Headers = new Headers()
    host = "http://47.92.145.25:2337/parse"
    className = "Snack"

    // message:Array<Message>;
    editObject:Message;
  
    constructor(private http:Http) {
      this.authHeaders.append("X-Parse-Application-Id","dev")
      this.authHeaders.append("X-Parse-Master-Key","angulardev")
      this.authHeaders.append("Content-Type","application/json")

    }

    getMessageByName(name):Observable<Message>{
     // let message = this.message.find(item=>item.name == name)
     //  return Observable.of(message)
     return
    }

    getMessageById(id):Observable<Message>{
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

    getMessage():Observable<Array<Message>>{
      
          let url = this.host+"/classes/" + this.className
          let options = {
            headers:this.authHeaders
          }
      
          return this.http
          .get(url,options)
          .map(data=>data.json().results)
        }
    
        saveMessage(message){
          let url = this.host+"/classes/" + this.className
          let options = {
            headers:this.authHeaders
          }
          
          if(message.objectId){
            let id = message.objectId
            delete message.createdAt
            delete message.updatedAt
            delete message.objectId
            delete message.ACL
      
            return this.http
            .put(url+"/"+id,message,options)
            .map(data=>data.json())
          }else{
            return this.http
            .post(url,message,options)
            .map(data=>data.json())
          }
        }
  
    addMessage(message){
      // this.message.push(message)
    }

    updateMessage(message){
      // this.http.put()
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
