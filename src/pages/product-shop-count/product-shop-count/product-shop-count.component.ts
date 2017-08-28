import { Component, OnInit, Input } from '@angular/core';
import { ProductShopCountService  } from "../product-shop-count.service";
import { Location } from "@angular/common"


@Component({
  selector: 'app-product-shop-count',
  templateUrl: './product-shop-count.component.html',
  styleUrls: ['./product-shop-count.component.scss']
})
export class ProductShopCountComponent implements OnInit { 
  @Input() product:any

  constructor(private productServ:ProductShopCountService,
  private loc:Location) { }

  delete(product){
    this.productServ.deleteByProductCode(product.product_code)
  }
  
  edit(){
    this.productServ.editObject = this.product
  }
  ngOnInit() {
  }

}

