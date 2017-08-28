import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductService {

  products:Array<Product>;
  editObject:Product;
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
 getProductByBrand(brand):Observable<Product>{
  let product = this.products.find(item=>item.brand == brand)
  return Observable.of(product)
}
 addProduct(product){
  this.products.push(product)
}
deleteByName(brand){
  this.products.forEach((item,index,arr)=>{
    if(item.brand == brand){
      arr.splice(index,1)
    }
  })
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
}
