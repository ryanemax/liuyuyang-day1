import { Component, OnInit } from '@angular/core';
interface Account{
  date:string,
  name:string,
  comment?:string,
  budget?:number,
  cost:number,
  random?:number
}

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  accounting:Array<Account>;
  constructor() {
   this.getAccountingList()
  }

  
  getAccountingList(){
    this.accounting = [
     {date:"2017/1/1" ,name:"Meal",cost:200,budget:500,random:20},
     {date:"2017/1/1",name:"Traffic",cost:100,random:30},
     {date:"2017/1/1",name:"Dress",cost:300,random:25},
     {date:"2017/1/1",name:"cosmetics",cost:300,random:40},
     {date:"2017/1/1",name:"Social",cost:500,random:15},
     {date:"2017/1/1",name:"Electric Communication",cost:300},
   ]
 }

 addAccount(){
   let rrr = Math.random()
   let newAccount= {date:"2017/1/3",name:"Traffic",cost:100,random: rrr}
   this.accounting.push(newAccount)
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
 ngOnInit() {
 } 

}
