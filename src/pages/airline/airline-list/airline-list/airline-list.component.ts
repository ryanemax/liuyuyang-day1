import { Component, OnInit } from '@angular/core';

interface Flight{
  from:string,
  price:number,
  to:string,
  year:number
  random?:number
}

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.scss']
})
export class AirlineListComponent implements OnInit {
  flights:Array<Flight>;
  firstLine:string;
  constructor() {
   this.getFlights()
  }
  
  getFlights(){
     this.flights = [
      {from:"dalian",price:1300,to:"shanghai",year:2017},
      {from:"kaoshi",price:700,to:"beijing",year:2017},
      {from:"london",price:1500,to:"us",year:2017},
      {from:"singpore",price:3300,to:"japan",year:2017},
      {from:"vancouver",price:1000,to:"hongkong",year:2016},
      {from:"xiamen",price:900,to:"shanghai",year:2016},
    ]
    this.firstLine =`第一个联系人是：${this.flights[0].from}`
  }

  addFlights(){
    let newMovie = {
      from:"Hongkong",
      price:1600,
      to:"Shanghai",
      year:2016
    }
    this.flights.push(newMovie)
  }

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.flights.sort((a,b)=>{
      if(a.price>b.price){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列 
    this.flights.sort((a,b)=>{
      if(a.price<b.price){
        return 1
      }else{
        return -1
      }
    })   
  }
  random(){
    this.flights.forEach((Flight)=>{
      let randomNum = Math.random()
      Flight.random = randomNum
    })  
  
    this.flights.sort((a,b)=>{
      if(a.random>b.random){
        return 1
      }else{
        return -1
      }
    })
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }
  ngOnInit() {
  }

}
