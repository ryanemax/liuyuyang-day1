import { Component, OnInit,Input,ElementRef, ViewChild } from '@angular/core';
import { CookbookService } from "../cookbook.service";
import { Location } from "@angular/common"

@Component({
  selector: 'app-cook-list-page',
  templateUrl: './cook-list-page.component.html',
  styleUrls: ['./cook-list-page.component.scss']
})
export class CookListPageComponent implements OnInit {
   @Input() menu:any 
  cookbook:Array<any>;
  
  @ViewChild('filter') filter: ElementRef;

 constructor(private cookbookServ:CookbookService,
  private loc:Location) {
    // this.list = this.contactServ.contacts  
    this.cookbookServ.getCookbook().subscribe(data=>{
      this.cookbook = data
    })
  }

   delete(menu){
    this.cookbookServ.deleteById(menu.objectId)
  }

  
  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.cookbook.sort((a,b)=>{
      if(a.level>b.level){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列   
      this.cookbook.sort((a,b)=>{
      if(a.level>b.level){
        return -1
      }else{
        return 1
      }
    }) 
  }
  
  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.cookbook.forEach(item=>{
      item.random = Math.random()
    })
    this.asc()
}




  ngOnInit() {

  }

}
