import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service'
import { Location } from '@angular/common';

import { MatDialog, MatDialogRef } from '@angular/material';
import { AssetEditDialogComponent } from '../asset-edit-dialog/asset-edit-dialog.component';

@Component({
  selector: 'app-asset-list-page',
  templateUrl: './asset-list-page.component.html',
  styleUrls: ['./asset-list-page.component.scss']
})

export class AssetListPageComponent implements OnInit {
  assets: Array<any>;
  searchText: string = "";
  searchType: string = "name";
  constructor(private assetService: AssetService, private location: Location,
    public dialog: MatDialog) {
    this.assetService.connect().subscribe(data => {
      this.assets = data
    })

  }

  // 打开修改弹框
  showEditAssetDailog(asset?) {
    if (asset) {
      this.assetService.editObject = asset
    } else {
      this.assetService.editObject = undefined
    }
    this.dialog.open(AssetEditDialogComponent)
  }

  // 删除
  deleteById(id) {
    this.assetService.deleteById(id)
  }

  priceAsc() {
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.assets.sort((a, b) => {
      if (a.price > b.price) {
        return 1
      } else {
        return -1
      }
    })
  }

  priceDesc() {
    // 逆序排列   
    this.assets.sort((a, b) => {
      if (a.price < b.price) {
        return 1
      } else {
        return -1
      }
    })
  }

  random() {
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.assets.sort((a, b) => {
      let randomVal = Math.random() - 0.5;
      return randomVal
    }
    )
  }

  search() {
    if(this.searchText==""){
      this.assetService.getAssets()
    }else{
      this.assetService.search(this.searchType,this.searchText)
    }
  }

  refresh(){
    this.search()
  }

  ngOnInit() {
  }

}

