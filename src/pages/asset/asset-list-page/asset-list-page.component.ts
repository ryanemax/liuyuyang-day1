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

