import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service"

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  list:Array<any>;
  constructor(private productServ:ProductService) {
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
