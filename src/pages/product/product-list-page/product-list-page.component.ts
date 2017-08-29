import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service"

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  products:Array<any>;
  constructor(private productServ:ProductService) {
    this.productServ.getProducts().subscribe(data=>{
      this.products = data
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
  ngOnInit() {
  }

}
