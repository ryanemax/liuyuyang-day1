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
    
    // getMessage(){
    //   this.message = [
    //    {name:"黄焖鸡米饭",mobile:"1336666666",local:"小吃一条街1-001店铺"},
    //    {name:"重庆鸡公煲",mobile:"1556666666",local:"小吃一条街1-002店铺"},
    //    {name:"东北铁锅焖面",mobile:"1556666666",local:"小吃一条街1-003店铺"},
    //   {name:"丽江斑鱼火锅",mobile:"1556666666",local:"小吃一条街1-004店铺"},
    //  ]
    // }
  
    addMessage(message){
      // this.message.push(message)
    }
    updateMessage(message){
      // this.http.put()
    }
    deleteById(id){
      // this.message.forEach((item,index,arr)=>{
      // if(item.name == name){
        //  arr.splice(index,1)
       }
   //
   }

  //  asc(){
  //    this.message.sort((a,b)=>{
   //     if(a.name>b.name){
  //        return 1
  //      }else{
  //        return -1
  //      }
   //   })
 // }
  
  
  //  desc(){
  //    this.message.sort((a,b)=>{
  //      if(a.name<b.name){
  //        return 1
  //      }else{
  //        return -1
  //      }
  //    })    
 //   }
 //   random(){
 //     this.message.sort((a,b)=>{
 //       return Math.random() > 0.5 ? 1 : -1;
 //     })    
      
 //    }
// }
