import { Component, OnInit } from '@angular/core';
import { ProductShopCountService  } from "../product-shop-count.service"

@Component({
  selector: 'app-product-shop-count-list',
  templateUrl: './product-shop-count-list.component.html',
  styleUrls: ['./product-shop-count-list.component.scss']
})
export class ProductShopCountListComponent implements OnInit {

list:Array<any>;
  constructor(private productServ:ProductShopCountService) {
    this.list = this.productServ.products
  }

  asc(){
    this.productServ.asc()
  }
  desc(){
    this.productServ.desc()
  }
  random(){
    this.productServ.random()
  }
  ngOnInit() {
  }
}
