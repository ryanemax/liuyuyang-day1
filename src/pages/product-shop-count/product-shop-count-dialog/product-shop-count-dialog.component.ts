import { Component, OnInit} from '@angular/core';
import { ProductShopCountService } from "../product-shop-count.service"
// import { Location } from "@angular/common"

import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-product-shop-count-dialog',
  templateUrl: './product-shop-count-dialog.component.html',
  styleUrls: ['./product-shop-count-dialog.component.scss']
})
export class ProductShopCountDialogComponent implements OnInit {
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
  constructor(private productServ:ProductShopCountService,
             public dialogRef: MatDialogRef<ProductShopCountDialogComponent>) {
    if(productServ.editObject){
      this.object = productServ.editObject
    }else{
      this.isNew = true;   
    }
  }
 save(){
    if(this.object.product_code==""||this.object.product_description==""||this.object.dataset_code==""
      ||this.object.shop_code==""||this.object.quantities==0||this.object.imgfiles==""){
      alert("信息不完整，请检查")
      return
    }

      this.productServ.saveProductShop(this.object).subscribe(data=>{
        this.close()
        this.productServ.refresh()
      })
  }

  close(){
    this.dialogRef.close()
  }

  ngOnInit() {
  }

}
