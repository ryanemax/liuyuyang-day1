import { Component, OnInit} from '@angular/core';
import { AirlineService } from "../airline.service"

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.scss']
})
export class AirlineListComponent implements OnInit {
  title:string="Welcome to Flight Airline!";
  add:string="Add";
  Asc:string="asc";
  Desc:string="desc";
  Random:string="random";
  airlines:Array<any>;
   constructor(private airlineServ:AirlineService) {
    // this.list = this.airlineServ.airlines
      this.airlineServ.getAirlines().subscribe(data=>{
      this.airlines = data
      console.log(data);
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
  ngOnInit() {
  }
}
