import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class PmjService {
  brands:Array<Brand>;
  editObject:Brand;
  
  constructor() { 
    this.setBrands();
  }

  setBrands(){
    this.brands = [
      {name:"Marlboro",consumerAccount:10000000,campaignAccount:3,taegetAudience:"Male",averagePrize:"$5"},
      {name:"Lark",consumerAccount:800000,campaignAccount:5,taegetAudience:"Male",averagePrize:"$10"},
      {name:"VS",consumerAccount:9000000,campaignAccount:2,taegetAudience:"Female",averagePrize:"$7"},
      {name:"Par",consumerAccount:1010000,campaignAccount:3,taegetAudience:"Male",averagePrize:"$5"},
      {name:"Jer",consumerAccount:90000,campaignAccount:1,taegetAudience:"Male",averagePrize:"$6"}
    ]
  }

  getBrandByName(name):Observable<Brand>{
    let brand = this.brands.find(item=>item.name == name);
    return Observable.of(brand);
  }

  addBrand(brand){
    this.brands.push(brand);
  }

  deleteByName(name){
    console.log("Del Name: " + name);
    this.brands.forEach((item,index,arr)=>{
      if(item.name == name){
        arr.splice(index,1)
      }
    })
  }

  asc(){
    this.brands.sort((a,b)=>{
      if(a.consumerAccount>b.consumerAccount){
        return 1
      }else{
        return -1
      }
    })
  }

  desc(){
    this.brands.sort((a,b)=>{
      if(a.consumerAccount<b.consumerAccount){
        return 1
      }else{
        return -1
      }
    })   
  }

  random(){
    // this.brands.forEach((item)=>{
      
    // })
    this.brands.sort((a,b)=>{
      if(Math.random()<Math.random()){
        return 1
      }else{
        return -1
      }
    })  
  }

}
