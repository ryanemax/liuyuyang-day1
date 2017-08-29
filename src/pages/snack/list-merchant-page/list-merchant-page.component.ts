import { Component, OnInit, Input } from '@angular/core';

import { SnackService } from '../snack.service';
import { Location } from "@angular/common"

@Component({
  selector: 'app-list-merchant-page',
  templateUrl: './list-merchant-page.component.html',
  styleUrls: ['./list-merchant-page.component.scss']
})
export class ListMerchantPageComponent implements OnInit {
  message:Array<any>

  constructor(private snackService: SnackService,
  private loc:Location) { 
    this.snackService.getMessage().subscribe(data=>{
      this.message = data
    })
  }
  
    delete(message){
      this.snackService.deleteById(message.objectId)
    }

    asc(){
      // 正序排列
      // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
      this.message.sort((a,b)=>{
        if(a.name>b.name){
          return 1
        }else{
          return -1
        }
      })
  }
  
  
    desc(){
      // 逆序排列   
        this.message.sort((a,b)=>{
        if(a.name>b.name){
          return -1
        }else{
          return 1
        }
      }) 
    }
    random(){
      // 随机排列
      // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
      this.message.forEach(item=>{
        item.random = Math.random()
      })
      this.asc()
  }

  ngOnInit() {
  }

}
