import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AssetService } from '../asset.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-asset-detail-page',
  templateUrl: './asset-detail-page.component.html',
  styleUrls: ['./asset-detail-page.component.scss']
})
export class AssetDetailPageComponent implements OnInit {

  obj: Asset = {
    no: 0,
    name: "",
    classification: "",
    brand: "",
    price: 0,
    addTime:{
      __type:"Date",
      iso: ""
    },
    img: "../../../assets/img/asset/img.png"
  }

  constructor(private route: ActivatedRoute, private assetService: AssetService, private location: Location) { }

  // 返回上一页
   returnList() {
    this.location.back()
  }

  ngOnInit() {
    // 根据ID显示信息
    this.route.params.subscribe(params => {
      let id = params['id']
      if ( id != "new") {
        this.assetService.getAssetById(id).subscribe(data=>{
          this.obj = data
      })
      }
    })
  }

}
