import { Component, OnInit } from '@angular/core';
import { MaterialModule } from "@angular/material"

import { BetsyAccountService } from "../betsy-account.service"

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  accounting:Array<any>;
  
    constructor(private accountServ:BetsyAccountService) {
      this.accountServ.getAccountingList().subscribe(data =>{
        this.accounting = data
      })
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
