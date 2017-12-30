import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AssetService} from '../asset.service'

@Component({
  selector: 'app-asset-edit-dialog',
  templateUrl: './asset-edit-dialog.component.html',
  styleUrls: ['./asset-edit-dialog.component.scss']
})
export class AssetEditDialogComponent implements OnInit {

  isNew:boolean

  obj: Asset = {
    no: 0,
    name: "",
    classification: "",
    brand: "",
    price: 1,
    addTime:{
      __type:"Date",
      iso: ""
    },
    img: "../../../assets/img/asset/img.png"
  }

  currentMaxNo: number
  
  constructor(private assetService:AssetService,public dialogRef: MatDialogRef<AssetEditDialogComponent>) {
    this.assetService.getAssetCount().subscribe(data => {
      this.currentMaxNo = data
    })
    if(assetService.editObject){
      this.obj = assetService.editObject
    }else{
      this.isNew = true;   
    }
  }

  saveAsset() {
    if (this.obj.name == "" || this.obj.brand == "" || this.obj.price < 0) {
      alert("信息不完整，请检查")
      return
    }
    if (this.obj.no == 0) {// 编号为空，代表新增
      this.obj.no = this.currentMaxNo + 1
      this.assetService.add(this.obj).subscribe(data => {
        this.close()
        this.assetService.refresh()        
      })
    } else {
      this.assetService.update(this.obj).subscribe(data => {
        this.close()
        this.assetService.refresh()
      })
    }
    
  }

  close(){
    this.dialogRef.close()
  }

  ngOnInit() {
  }

}


@Component({
  selector: 'dialog-result',
  template: `
  信息填写不完整，请检查
  `,
})
export class DialogResult {
  constructor(public dialogRef: MatDialogRef<DialogResult>) {}
}