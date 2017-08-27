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
    this.goods = this.goodsServ.goods
  }

  asc(){
    this.goodsServ.asc();
  }


  desc(){
    this.goodsServ.desc();
  }

  random(){
    this.goodsServ.random();
  }
  ngOnInit() {
  }

}
