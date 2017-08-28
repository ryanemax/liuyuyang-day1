import { Component, OnInit } from '@angular/core';
import { ShopService } from "../shop.service"



@Component({
  selector: 'app-taobao-shoplist',
  templateUrl: './taobao-shoplist.component.html',
  styleUrls: ['./taobao-shoplist.component.scss']
})
export class TaobaoShoplistComponent implements OnInit {

  shops: Array<any>;
  constructor(private shopServ:ShopService) {
    this.shops = this.shopServ.shops
  }
  
  asc(){
    this.shopServ.asc()
  }
  desc(){
    this.shopServ.desc()
  }
  random(){
    this.shopServ.random()
  }
     delete(shop){
    this.shopServ.deleteByName(shop.productName)
  }
  ngOnInit() {
  }

}
