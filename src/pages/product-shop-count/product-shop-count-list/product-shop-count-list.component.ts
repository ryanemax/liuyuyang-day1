import { Component, OnInit } from '@angular/core';
import { ProductShopCountService  } from "../product-shop-count.service"

@Component({
  selector: 'app-product-shop-count-list',
  templateUrl: './product-shop-count-list.component.html',
  styleUrls: ['./product-shop-count-list.component.scss']
})
export class ProductShopCountListComponent implements OnInit {

products:Array<any>;
  constructor(private productServ:ProductShopCountService) {
    this.productServ.getProducts().subscribe(data=>{
      this.products = data
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
