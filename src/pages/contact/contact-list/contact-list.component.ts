import { Component, OnInit } from '@angular/core';

interface Contact{
  birth?:Date
  name:string,
  sex:string,
  mobile:string,
  age?:number
  random?:number
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts:Array<Contact>;
  constructor() {
   this.getContacts()
  }
  
  getContacts(){
     this.contacts = [
      {birth:new Date(),name:"LiuYuyang",sex:"M",mobile:"1316666666",age:20},
      {birth:new Date(),name:"Wangkai",sex:"F",mobile:"1316666667"},
      {birth:new Date(),name:"Yaoming",sex:"M",mobile:"1316666668"},
      {birth:new Date(),name:"Yaoming",sex:"F",mobile:"1316666668"},
    ]
  }

  addContact(){
    let newContact = {
      name:"Rita",
      sex:"F",
      mobile:"13677777777"
    }
    this.contacts.push(newContact)
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
