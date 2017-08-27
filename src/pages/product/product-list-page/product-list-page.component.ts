import { Component, OnInit } from '@angular/core';

interface Product{
  brand:string,
  type:string,
  function:string,
  price:number,
  random?:number
}

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  products:Array<Product>;
  constructor() {
   this.getProducts();
  }
  getProducts(){
    this.products = [
     {brand:"多多",type:"护肤",function:"祛斑",price:299},
     {brand:"韩束",type:"彩妆",function:"防晒",price:388},
     {brand:"兰芝",type:"香氛",function:"爽身",price:199},
     {brand:"珀莱雅",type:"个人护理",function:"护肤",price:512},
   ]
 }

 asc(){
   // 正序排列
   // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   this.products.sort((a,b)=>{
     if(a.brand>b.brand){
       return 1
     }else{
       return -1
     }
   })
}
 desc(){
   // 逆序排列
   this.products.sort((a,b)=>{
     if(a.brand<b.brand){
       return 1
     }else{
       return -1
     }
   }) 
 }
 random(){
   // 随机排列
   // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.products.forEach((item)=>{
   item.random = Math.random();
   this.ascRandom();
  })
 }
 ascRandom(){
   // 正序排列
   // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   this.products.sort((a,b)=>{
     if(a.random>b.random){
       return 1
     }else{
       return -1
     }
   })
  }

  ngOnInit() {
  }

}
