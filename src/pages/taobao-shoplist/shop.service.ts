import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

interface Shop {
  index?: number,
  productName: string,
  number: string,
  prices: string,
  born?: string,
  random?: number,

}


@Injectable()
export class ShopService {
  shops:Array<Shop>;
  editObject:Shop;
  constructor() { 
    this.getProducts()
  }

  getProductByName(productName):Observable<Shop>{
    let shop;
    this.shops.forEach((item,index,arr)=>{
      if(item.productName == productName){
        shop = item;
      }
    })

    return Observable.of(shop)
  }

  getProducts() {
    this.shops = [

      { index: 1, productName: "吧台桌", number: "5", prices: "790", born: "shenyang", random: Math.random() },
      { index: 2, productName: "DIY高脚椅子", number: "4", prices:"178", random: Math.random() },
      { index: 3, productName: "联想Y510", number: "6", prices: "4999", random: Math.random() },
      { index: 4, productName: "恒大冰泉", number: "7", prices:"2.5", random: Math.random() },
      { index: 5, productName: "达芙妮女鞋", number: "8", prices: "540", born: "dalian", random: Math.random() },
    ]
  
  }

    addProduct(newProduct){
      
      newProduct.index=this.shops.length+1;
      newProduct.random=Math.random();
      this.shops.push(newProduct)
  }

  // addProduct() {
  //   let newProduct = {
  //     index: this.products.length + 1,
  //     productName: "suger",
  //     number: "100",
  //     price: "10",
  //     random: Math.random()
  //   }
  //   this.products.push(newProduct)
  // }

    deleteByName(name){
    this.shops.forEach((item,index,arr)=>{
      if(item.productName == name){
        arr.splice(index,1)
      }
    })
  }

  desc() {

    this.shops.sort((a, b) => {
      if (a.index < b.index) {
        return 1
      } else {
        return -1
      }
    })
  }


  asc() {
    // 逆序排列 
    this.shops.sort((a, b) => {
      if (a.index > b.index) {
        return 1
      } else {
        return -1
      }
    })

  }

  random() {
    this.shops.sort((a, b) => {
      if (a.random > b.random) {
        return 1
      } else {
        return -1
      }
    })

  }

}
