import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductShopCountService {
  products:Array<ProductShop>;
  editObject:ProductShop;
  constructor() {
    this.getProducts()
   }
  getProductByProductCode(product_code):Observable<ProductShop>{
    let product = this.products.find(item=>item.product_code ==product_code)
    return Observable.of(product)
  
  }

  getProducts(){
    this.products = [
     {addDate:new Date(), product_code:"600100",product_description:"vc",shop_code:"3020",dataset_code:"05K00X00",quantities:210},
     {addDate:new Date(), product_code:"600101",product_description:"lip",shop_code:"1314",dataset_code:"03Z00M00",quantities:213},
     {addDate:new Date(), product_code:"600102",product_description:"cream",shop_code:"3020",dataset_code:"02Z00X00",quantities:89},
     {addDate:new Date(), product_code:"600103",product_description:"toothbrush",shop_code:"3020",dataset_code:"01D001001",quantities:194},
    
    ]
  }

addProduct(product){
  this.products.push(product)
}

deleteByProductCode(product_code){
  this.products.forEach((item,index,arr)=>{
    if(item.product_code == product_code){
      arr.splice(index,1)
    }
  })
}

asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.products.sort((a,b)=>{
      if(a.dataset_code>b.dataset_code){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列    
    this.products.sort((a,b)=>{
      if(a.quantities<b.quantities){
        return 1
      }else{
        return -1
      }
    })

  }
  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  
    this.products.sort((a,b)=>{
      return Math.random()
  })

  }
  ngOnInit() {
  }


}







