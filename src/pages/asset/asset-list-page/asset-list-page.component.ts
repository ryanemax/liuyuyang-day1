import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service'

@Component({
  selector: 'app-asset-list-page',
  templateUrl: './asset-list-page.component.html',
  styleUrls: ['./asset-list-page.component.scss']
})

export class AssetListPageComponent implements OnInit {
  assets: Array<any>;
  constructor(private assetService: AssetService) {
    this.assets = this.assetService.assets
  }

  addAsset(){
    // 新增宝贝
    let newAsset = {
      no: this.assets.length+1,
      name: "第"+(this.assets.length+1)+"件宝贝",
      classification: "上衣",
      brand: "拉夏贝尔",
      price: "800",
      addTime: new Date()
    }
    this.assetService.add(newAsset)
  }

  priceAsc() {
    // 正序排列
   this.assetService.priceAsc()
  }

  priceDesc() {
    // 逆序排列   
    this.assetService.priceDesc()
  }

  random() {
    // 随机排列
    this.assetService.random()
  }

  ngOnInit() {
  }

}

