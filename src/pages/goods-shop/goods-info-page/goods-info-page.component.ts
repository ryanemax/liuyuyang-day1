import { Component, OnInit } from '@angular/core';
import { GoodsShopService } from "../goods-shop.service"

@Component({
  selector: 'app-goods-info-page',
  templateUrl: './goods-info-page.component.html',
  styleUrls: ['./goods-info-page.component.scss']
})
export class GoodsInfoPageComponent implements OnInit {
  goods:Array<any>;
  constructor(private goodsServ: GoodsShopService) {
    // this.goods = this.goodsServ.goods
    this.goodsServ.getGoods().subscribe(data=>{
      this.goods = data
    })
  }

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.goods.sort((a,b)=>{
      if(a.price>b.price){
        return 1
      }else{
        return -1
      }
    })
  }


  desc(){
    // 逆序排列 
    this.goods.sort((a,b)=>{
      if(a.price<b.price){
        return 1
      }else{
        return -1
      }
    })   
  }

  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.goods.sort((g1, g2) => {
      g1.index = Math.random();
      g2.index = Math.random();
      return g1.index < g2.index ? 1 : 0;
    });
  }

  ngOnInit() {
  }

}
