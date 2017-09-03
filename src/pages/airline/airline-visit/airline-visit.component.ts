import { Component, OnInit } from '@angular/core';
import { AirlineService } from "../airline.service"
@Component({
  selector: 'app-airline-visit',
  templateUrl: './airline-visit.component.html',
  styleUrls: ['./airline-visit.component.scss']
})
export class AirlineVisitComponent implements OnInit {
  flightList: Array<any>;
  Price:string="Sort by price";
  Visitor:string="Sort by visitor";
  Random:string="random";
  constructor(private flightServ:AirlineService) {
    // this.list = this.airlineServ.airlines
      this.flightServ.getAirlines().subscribe(data=>{
      this.flightList = data
      console.log(data);
    })
  }

    ascPrice(){
      // 正序排列
      // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
      this.flightList.sort((a,b)=>{
        if(a.price>b.price){
          return 1
        }else{
          return -1
        }
      })
    }


    ascVisitor(){
      // 逆序排列   
        this.flightList.sort((a,b)=>{
        if(a.visitNumber>b.visitNumber){
          return 1
        }else{
          return -1
        }
      }) 
    }
    random(){
      // 随机排列
      // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
      this.flightList.forEach(item=>{
        item.random = Math.random()
      })
      this.ascPrice()
  }

  ngOnInit() {
      this.flightServ.getAirlines().subscribe(data => {
      this.flightServ.flightList = data;
      this.flightList = this.flightServ.flightList;
    });
  }

}
