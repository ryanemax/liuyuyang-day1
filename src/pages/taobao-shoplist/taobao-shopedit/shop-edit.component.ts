import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ShopService } from "../shop.service"

import {MdDialog, MdDialogRef} from '@angular/material';

interface Shop {
  index?: number,
  productName: string,
  number: string,
  prices: string,
  born?: string,
  random?: number,

}

@Component({
  selector: 'app-product-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class TaobaoShopEditComponent implements OnInit {
  object:Shop = {
    productName:"",
    number:"",
    prices:""
  }
  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
    private shopServ:ShopService,
    public dialog: MdDialog) { 
    if(shopServ.editObject){
      this.object = shopServ.editObject
    }
  }


  
  save(){
    if(this.object.productName==""||this.object.number==""||this.object.prices==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.shopServ.addProduct(this.object);
    }
    this.back()
  }
  back(){
    this.loc.back()
  }
  ngOnInit() {
          this.route.params.subscribe(params=>{
          let name = params['name']
          if(name=="new"){
            this.isNew = true;
          }else{
            this.shopServ.getProductByName(name).subscribe(shop=>{
            
            this.object = shop
        })
      }

    })
  }

}

