import { Component, OnInit } from '@angular/core';

interface Message{
  name:string,
  mobile:string,
  local?:string
  random?:number
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  message:Array<Message>;
  firstLine:string;
  constructor() {
   this.getMessage()
  }
  
  getMessage(){
     this.message = [
      {name:"黄焖鸡米饭",mobile:"1336666666",local:"大连高新园区"},
      {name:"重庆鸡公煲",mobile:"1556666666",local:"大连蔡大岭"},
      {name:"东北铁锅焖面",mobile:"1556666666",local:"大连开发区"},
      {name:"丽江斑鱼火锅",mobile:"1556666666",local:"大连黄浦路"},
    ]
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
