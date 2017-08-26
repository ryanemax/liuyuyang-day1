import { Component, OnInit } from '@angular/core';

interface Contact{
  name:string,
  sex:string,
  mobile:string,
  age?:number
  random?:number
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  contacts:Array<Contact>;
  firstLine:string;
  constructor() {
   this.getContacts()
  }
  
  getContacts(){
     this.contacts = [
      {name:"LiuYuyang",sex:"M",mobile:"1316666666",age:20},
      {name:"Wangkai",sex:"F",mobile:"1316666667"},
      {name:"Yaoming",sex:"M",mobile:"1316666668"},
      {name:"Yaoming",sex:"F",mobile:"1316666668"},
    ]
    this.firstLine =`第一个联系人是：${this.contacts[0].name}`
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
      if(a.sex>b.sex){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列    
  }
  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }
  ngOnInit() {
  }

}
