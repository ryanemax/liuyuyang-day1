import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';



@Injectable()
export class BetsyAccountService {
  accounting:Array<Account>;
  editObject:Account;
  constructor() {
   this.getAccountingList()
  }

 
  getAccountByName(name):Observable<Account>{
    let account = this.accounting.find(item=>item.event == name)
    return Observable.of(account)
  }

  addAccount(newAccount){
    this.accounting.push(newAccount)
  }
 
  
  deleteByName(name){
    this.accounting.forEach((item,index,arr)=>{
      if(item.event == name){
        arr.splice(index,1)
      }
    })
  }
  getAccountingList(){
    this.accounting = [
     {date:"2017/1/1" ,event:"Meal",cost:200,budget:500,type: "cost",random:20},
     {date:"2017/1/1",event:"Traffic",type: "cost",cost:100,random:30},
     {date:"2017/1/1",event:"Dress",cost:300,type: "cost", random:25},
     {date:"2017/1/1",event:"cosmetics",cost:300,type: "cost",random:40},
     {date:"2017/1/1",event:"Social",cost:500,type: "cost",random:15},
     {date:"2017/1/1",event:"Electric Communication",type: "cost",cost:300},
   ]
 }




 asc(){
   // 正序排列
   // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   this.accounting.sort((a,b)=>{
     if(a.cost>b.cost){
       return 1
     }else{
       return -1
     }
   })
}


 desc(){
  this.accounting.sort((a,b)=>{
    if(a.cost<b.cost){
      return 1
    }else{
      return -1
    }
  })   
 }
 random(){
   // 随机排列
   // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

   this.accounting.sort((a,b)=>{
      return Math.random()
  
  })
 }
}
