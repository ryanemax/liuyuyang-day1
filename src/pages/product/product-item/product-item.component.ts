import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from "../product.service"
import { Location } from "@angular/common"

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product:any

  constructor(private productserv:ProductService,
  private loc:Location) { }
  delete(product){
    this.productserv.deleteById(product.objectId).subscribe(data=>{
      location.href = "/product"
  })

  }
  ngOnInit() {
  }

}
