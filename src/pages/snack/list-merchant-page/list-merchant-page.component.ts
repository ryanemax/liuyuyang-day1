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
      this.snackService.deleteById(message.objectId).subscribe(data=>{
          location.href = "/snack"
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
      this.message.forEach(item=>{
        item.random = Math.random()
      })
      this.message.sort((a,b)=>{
        if(a.random>b.random){
          return 1
        }else{
          return -1
        }
      })
  }

  ngOnInit() {
  }

}
