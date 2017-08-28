import { Component, OnInit } from '@angular/core';
import { PmjService } from "../pmj.service"

@Component({
  selector: 'app-pmj-page',
  templateUrl: './pmj-page.component.html',
  styleUrls: ['./pmj-page.component.scss']
})
export class PmjPageComponent implements OnInit {

  brands:Array<Brand>;
  
  constructor(private pmjServ:PmjService) { 
    this.brands = this.pmjServ.brands;
  }

  asc(){
    this.pmjServ.asc();
  }
  desc(){
    this.pmjServ.desc();
  }
  random(){
    this.pmjServ.random();
  }
  

  // setBrands(){
  //   this.brands = [
  //     {name:"Marlboro",consumerAccount:10000000,campaignAccount:3,taegetAudience:"Male",averagePrize:"$5"},
  //     {name:"Lark",consumerAccount:800000,campaignAccount:5,taegetAudience:"Male",averagePrize:"$10"},
  //     {name:"VS",consumerAccount:9000000,campaignAccount:2,taegetAudience:"Female",averagePrize:"$7"},
  //     {name:"Par",consumerAccount:1010000,campaignAccount:3,taegetAudience:"Male",averagePrize:"$5"},
  //     {name:"Jer",consumerAccount:90000,campaignAccount:1,taegetAudience:"Male",averagePrize:"$6"}
  //   ]
  // }

  // addBrand(){
  //   let newBrand = {
  //     name:"Marlboro",
  //     consumerAccount:10000000,
  //     campaignAccount:3,
  //     taegetAudience:"Male",
  //     averagePrize:"$5"
  //   }
  //   this.brands.push(newBrand)
  // }

  // asc(){
  //   this.brands.sort((a,b)=>{
  //     if(a.consumerAccount>b.consumerAccount){
  //       return 1
  //     }else{
  //       return -1
  //     }
  //   })
  // }

  // desc(){
  //   this.brands.sort((a,b)=>{
  //     if(a.consumerAccount<b.consumerAccount){
  //       return 1
  //     }else{
  //       return -1
  //     }
  //   })   
  // }

  // random(){
  //   // this.brands.forEach((item)=>{
      
  //   // })
  //   this.brands.sort((a,b)=>{
  //     if(Math.random()<Math.random()){
  //       return 1
  //     }else{
  //       return -1
  //     }
  //   })  
  // }
  
  ngOnInit() {
  }

}


