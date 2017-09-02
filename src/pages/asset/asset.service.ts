import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/count';
import { Parse } from '../../cloud/cloud';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AssetService {

  // HTTP Params
  authHeaders: Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "Asset"
  options = {
    headers: this.authHeaders
  }
  url = this.host + "/classes/" + this.className
  assetCount: Observable<number>
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  assets: Array<Asset>;

  // 修改时的编辑对象
  editObject:Asset;

  constructor(private http: Http) {
    this.authHeaders.append("X-Parse-Application-Id", "dev")
    this.authHeaders.append("X-Parse-Master-Key", "angulardev")
    this.authHeaders.append("Content-Type", "application/json")

    this.refresh()
  }

  getAssets(): Observable<Array<Asset>> {
    let query = new Parse.Query(this.className, this.http)
    return query.find()
  }

  // getAssets() {
  //   this.assets = [
  //     {
  //       no: 1, name: "ONLY黑色连帽卫衣",
  //       classification: "上衣",
  //       brand: "ONLY",
  //       price: 244, addTime: new Date("2016-03-03"), img: "../../../assets/img/asset/1.jpg"
  //     }, {
  //       no: 2, name: "ONLY荷叶边连衣裙",
  //       classification: "裙装",
  //       brand: "ONLY",
  //       price: 249, addTime: new Date("2016-06-07"), img: "../../../assets/img/asset/2.jpg"
  //     }, {
  //       no: 3, name: "ONLY修身小脚牛仔裤",
  //       classification: "裤装",
  //       brand: "ONLY",
  //       price: 199, addTime: new Date("2016-10-05"), img: "../../../assets/img/asset/3.jpg"
  //     }, {
  //       no: 4, name: "平底绣花布鞋",
  //       classification: "鞋靴",
  //       brand: "老北京布鞋",
  //       price: 29, addTime: new Date("2016-10-05"), img: "../../../assets/img/asset/4.jpg"
  //     }, {
  //       no: 5, name: "恒源祥夏用披肩",
  //       classification: "围巾",
  //       brand: "恒源祥",
  //       price: 138, addTime: new Date("2017-07-03"), img: "../../../assets/img/asset/5.jpg"
  //     }, {
  //       no: 6, name: "ZARA几何图形印花晚宴包",
  //       classification: "包包",
  //       brand: "ZARA",
  //       price: 399, addTime: new Date("2017-08-10"), img: "../../../assets/img/asset/6.jpg"
  //     }
  //   ]
  // }

  add(asset) {
    // 新增宝贝

    if (asset.addTime && !asset.addTime.__type) {
      asset.addTime = {
        __type: "Date",
        iso: new Date(asset.addTime)
      }
    }
    return this.http
      .post(this.url, asset, this.options)
  }

  update(asset) {
    // 修改宝贝
    let id = asset.objectId

    delete asset.createdAt
    delete asset.updatedAt
    delete asset.objectId
    delete asset.ACL

    if (asset.addTime && !asset.addTime.__type) {
      asset.addTime = {
        __type: "Date",
        iso: new Date(asset.addTime)
      }
    }

    return this.http
      .put(this.url + "/" + id, asset, this.options)
      .map(data => data.json())
  }

  // getAssetByNo(no): Observable<Asset> {
  //   let asset = this.assets.find(item => item.no == no)
  //   return Observable.of(asset)
  // }

  getAssetById(id): Observable<any> {
    let query = new Parse.Query(this.className, this.http)
    return query.get(id)
  }

  deleteById(id) {
    return this.http
      .delete(this.url + "/" + id, this.options)
      .map(data => data.json())
      .subscribe(data => {
        let assets = this.dataChange.value
        assets.forEach((item, index, arr) => {
          if (item.objectId == id) {
            arr.splice(index, 1)
          }
        })
        this.dataChange.next(assets)
      })
  }


  getAssetCount(): Observable<number> {
    return this.http.get(this.url + "?count=1", this.options)
      .map(data => data.json().count)

  }

  connect() {
    return this.dataChange
  }
  
  refresh() {
    this.getAssets().subscribe(data => {
      this.dataChange.next(data);
    })
  }

  search(type, value) {
    let query = new Parse.Query(this.className, this.http)
    query.equalTo(type, value)
    query.find().subscribe(data => {
      this.assets = data
      this.dataChange.next(data);
    })
    
  }

}
