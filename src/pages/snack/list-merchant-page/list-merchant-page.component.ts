import { Component, OnInit } from '@angular/core';

import { SnackService } from '../snack.service';

interface Message{
  name:string,
  mobile:string,
  local?:string
  random?:number
}
@Component({
  selector: 'app-list-merchant-page',
  templateUrl: './list-merchant-page.component.html',
  styleUrls: ['./list-merchant-page.component.scss']
})
export class ListMerchantPageComponent implements OnInit {

  message:Array<Message>;

  constructor(private snackServ:SnackService) {
    this.getMessage()
  }
  
  getMessage(){
     this.message = this.snackServ.message
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

  ngOnInit() {
  }

}
