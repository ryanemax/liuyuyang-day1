import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {ProductService} from '../product.service'

import {MatDialog, MatDialogRef} from '@angular/material';


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
  public dialog: MatDialog) { 
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
      this.contactServ.saveProduct(this.object).subscribe(data=>{
        this.back()
      })
    }else{
      this.contactServ.saveProduct(this.object).subscribe(data=>{
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
            this.contactServ.getProductById(id).subscribe(Product=>{
            this.object = Product
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
//   constructor(public dialogRef: MatDialogRef<DialogResult>) {}
// }