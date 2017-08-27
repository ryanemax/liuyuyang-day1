import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class AirlineService {
airlines:Array<Airline>;
  editObject:Airline;
  constructor() { 
    this.getAirlines()
  }
  getContactByName(price):Observable<Airline>{
    let airline = this.airlines.find(item=>item.price == price)
    return Observable.of(airline)
  }

  getAirlines(){
     this.airlines = [
      {from:"dalian",price:1300,to:"shanghai",year:2017,image:"../../../assets/img/flight/dalian.jpg",username:""},
      {from:"kaoshi",price:700,to:"beijing",year:2017,image:"../../../assets/img/flight/kaoshi.jpg",username:""},
      {from:"london",price:1500,to:"us",year:2017,image:"../../../assets/img/flight/london.jpg",username:""},
      {from:"singpore",price:3300,to:"japan",year:2017,image:"../../../assets/img/flight/singpore.jpg",username:""},
      {from:"vancouver",price:1000,to:"hongkong",year:2016,image:"../../../assets/img/flight/vancouver.jpg",username:""},
      {from:"xiamen",price:900,to:"shanghai",year:2016,image:"../../../assets/img/flight/xiamen.jpg",username:""}
    ]
  }

  addAirlines(airline){
    this.airlines.push(airline)
  }
  deleteByName(price){
    this.airlines.forEach((item,index,arr)=>{
      if(item.price == price){
        arr.splice(index,1)
      }
    })
  }

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.airlines.sort((a,b)=>{
      if(a.price>b.price){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列   
      this.airlines.sort((a,b)=>{
      if(a.price>b.price){
        return -1
      }else{
        return 1
      }
    }) 
  }
  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.airlines.forEach(item=>{
      item.random = Math.random()
    })
    this.asc()
}

}
