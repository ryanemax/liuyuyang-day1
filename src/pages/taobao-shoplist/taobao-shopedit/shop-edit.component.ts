import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ShopService } from "../shop.service"

import {MdDialog, MdDialogRef} from '@angular/material';

// interface Shop {
//   index?: number,
//   productName: string,
//   number: string,
//   prices: string,
//   born?: string,
//   random?: number,

// }

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
    if(this.isNew){
      this.shopServ.saveShop(this.object).subscribe(data=>{
        this.back()
      })
    }else{
      this.shopServ.saveShop(this.object).subscribe(data=>{
        this.back()
      })
    }
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
            this.shopServ.getShopById(id).subscribe(shop=>{
            
            this.object = shop
        })
      }

    })
  }

}

