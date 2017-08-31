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
  object:ProductShop = {
    product_code:"",
    product_description:"",
    shop_code:"",
    dataset_code:"",
    quantities:0 ,
    imgfiles:"",
    addDate:{
      __type:"Date",
      iso: ""
    }
  
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
    if(this.object.product_code==""||this.object.product_description==""||this.object.dataset_code==""
      ||this.object.shop_code==""||this.object.quantities==0||this.object.imgfiles==""){
      this.dialog.open(DialogResult);
      return
    }

    this.productServ.saveProductShop(this.object).subscribe(data=>{
      this.back()
        this.productServ.refresh()
      
    })
   }

    back(){
       this.loc.back()
    }

  ngOnInit() {
          this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            this.isNew = true;
          }else{
            this.productServ.getProductShopById(id).subscribe(product=>{
            this.object = product
        })
      }

    })
  }

}

@Component({
  selector: 'dialog-result',
  template: `
  信息填写不完整，请检查
  `,
})
export class DialogResult {
  constructor(public dialogRef: MdDialogRef<DialogResult>) {}
}

