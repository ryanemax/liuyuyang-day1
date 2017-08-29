import { Component, OnInit } from '@angular/core';
import { ContactService } from "../contact.service"

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts:Array<any>;
  constructor(private contactServ:ContactService) {
    // this.list = this.contactServ.contacts
    this.contactServ.connect().subscribe(data=>{
      this.contacts = data
    })
  }

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.contacts.sort((a,b)=>{
      if(a.name>b.name){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列   
      this.contacts.sort((a,b)=>{
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
    this.contacts.forEach(item=>{
      item.random = Math.random()
    })
    this.asc()
}
  ngOnInit() {
  }

}
