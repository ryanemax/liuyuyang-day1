import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"

import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';


@Injectable()
export class SnackService {
  message:Array<Message>;
  editObject:Message;
  
    constructor() {
      this.getMessage()
    }

    getMessageByName(name):Observable<Message>{
      let message = this.message.find(item=>item.name == name)
      return Observable.of(message)
    }
    
    getMessage(){
       this.message = [
        {name:"黄焖鸡米饭",mobile:"1336666666",local:"小吃一条街1-001店铺"},
        {name:"重庆鸡公煲",mobile:"1556666666",local:"小吃一条街1-002店铺"},
        {name:"东北铁锅焖面",mobile:"1556666666",local:"小吃一条街1-003店铺"},
        {name:"丽江斑鱼火锅",mobile:"1556666666",local:"小吃一条街1-004店铺"},
      ]
    }
  
    addMessage(message){
      this.message.push(message)
    }
    deleteByName(name){
      this.message.forEach((item,index,arr)=>{
        if(item.name == name){
          arr.splice(index,1)
        }
      })
    }

    asc(){
      this.message.sort((a,b)=>{
        if(a.name>b.name){
          return 1
        }else{
          return -1
        }
      })
  }
  
  
    desc(){
      this.message.sort((a,b)=>{
        if(a.name<b.name){
          return 1
        }else{
          return -1
        }
      })    
    }
    random(){
      this.message.sort((a,b)=>{
        return Math.random() > 0.5 ? 1 : -1;
      })    
      
     }
}
