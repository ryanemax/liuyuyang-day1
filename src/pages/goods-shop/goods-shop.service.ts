import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class GoodsShopService {
  goods:Array<Item>;
  editObject:Item;
  constructor() { 
    this.getGoods()
  }

  getContactByName(name):Observable<Item>{
    let item = this.goods.find(item=>item.name == name)
    return Observable.of(item)
  }

  addContact(item){
    this.goods.push(item)
  }

  deleteByName(name){
    this.goods.forEach((item,index,arr)=>{
      if(item.name == name){
        arr.splice(index,1)
      }
    })
  }

  getGoods(){
     this.goods = [
      {name:"乐事薯片",price:"7",},
      {name:"百奇",price:"6.5"},
      {name:"好多鱼",price:"5"},
      {name:"泡面",price:"6"},
      {name:"喜之郎",price:"4.5"},
      {name:"火腿",price:"4"},
    ]
  }

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.goods.sort((a,b)=>{
      if(a.price>b.price){
        return 1
      }else{
        return -1
      }
    })
  }


  desc(){
    // 逆序排列 
    this.goods.sort((a,b)=>{
      if(a.price<b.price){
        return 1
      }else{
        return -1
      }
    })   
  }

  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.goods.forEach((item)=>{
      let randomNum = Math.random()
      item.random = randomNum
    })  
  
    this.goods.sort((a,b)=>{
      if(a.random>b.random){
        return 1
      }else{
        return -1
      }
    })
  }

}
