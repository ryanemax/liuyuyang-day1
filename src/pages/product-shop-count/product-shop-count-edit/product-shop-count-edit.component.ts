import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductShopCountService  } from "../product-shop-count.service";

import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-product-shop-count-edit',
  templateUrl: './product-shop-count-edit.component.html',
  styleUrls: ['./product-shop-count-edit.component.scss']
})
export class ProductShopCountEditComponent implements OnInit {
  object:Product = {
    product_code:"",
    product_description:"",
    shop_code:"",
    dataset_code:"",
    quantities:0 ,
    addDate:new Date()
  
  }

  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
  private productServ:ProductShopCountService,
  public dialog: MdDialog)  {
    if(productServ.editObject){
      this.object = productServ.editObject
    }
   }

  save(){
    if(this.object.product_code==""||this.object.product_description==""||this.object.dataset_code==""||this.object.shop_code==""||this.object.quantities==0){
      alert("信息不完整，请检查")
      return
    }
      if(this.isNew){
        this.productServ.addProduct(this.object)
      }
      this.back()
  }
      back(){
        this.loc.back()
      }
  ngOnInit() {
            this.route.params.subscribe(params=>{
          let product_code = params['product_code']
          if(product_code=="new"){
            this.isNew = true;
          }else{
            this.productServ.getProductByProductCode(product_code).subscribe(product=>{
            this.object = product
        })
      }

    })
  }

}

