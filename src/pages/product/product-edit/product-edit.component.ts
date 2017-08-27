import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {ProductService} from '../product.service'

import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  object:Product = {
    brand:"",
    type:"",
    function:"",
    price:0
  }
  
  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
  private contactServ:ProductService,
  public dialog: MdDialog) { 
    if(contactServ.editObject){
      this.object = contactServ.editObject
    }
  }
  
  save(){
    if(this.object.brand==""||this.object.type==""||this.object.function==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.contactServ.addProduct(this.object)
    }
    this.back()
  }
  back(){
    this.loc.back()
  }
  ngOnInit() {
            this.route.params.subscribe(params=>{
          let brand = params['brand']
          if(brand=="new"){
            this.isNew = true;
          }else{
            this.contactServ.getProductByBrand(brand).subscribe(contact=>{
            this.object = contact
        })
      }

    })
  }

}

// @Component({
//   selector: 'dialog-result',
//   template: `
//   信息填写不完整，请检查
//   `,
// })
// export class DialogResult {
//   constructor(public dialogRef: MdDialogRef<DialogResult>) {}
// }