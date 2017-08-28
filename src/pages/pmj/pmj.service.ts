import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';


@Injectable()
export class PmjService {
  brands:Array<Brand>;
  editObject:Brand;

  authHeaders:Headers = new Headers();
  className = "Pmj";
  host = "http://localhost:1337/parse"

  constructor(private http:Http) { 
    this.setBrands();

    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")
  }

  getBrandById(id):Observable<Brand>{
    // let contact = this.contacts.find(item=>item.name == name)
    // return Observable.of(contact)

    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
      .get(url,options)
      .map(data=>data.json());
  }

  getBrands():Observable<Array<Brand>>{

    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results)
  }

  setBrands(){
    this.brands = [
      {name:"Marlboro",consumerAccount:"1000",campaignAccount:"3",taegetAudience:"Male",averagePrize:"$5"},
      {name:"Lark",consumerAccount:"800000",campaignAccount:"5",taegetAudience:"Male",averagePrize:"$10"},
      {name:"VS",consumerAccount:"9000000",campaignAccount:"2",taegetAudience:"Female",averagePrize:"$7"},
      {name:"Par",consumerAccount:"1010000",campaignAccount:"3",taegetAudience:"Male",averagePrize:"$5"},
      {name:"Jer",consumerAccount:"90000",campaignAccount:"1",taegetAudience:"Male",averagePrize:"$6"}
    ]
  }

  getBrandByName(name):Observable<Brand>{
    let brand = this.brands.find(item=>item.name == name);
    return Observable.of(brand);
  }

  addBrand(brand){
    // this.brands.push(brand);
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }
    console.log(brand);
    return this.http.post(url, brand, options);
  }

  updateBrand(brand){
    // this.brands.push(brand);
    let url = this.host+"/classes/" + this.className + "/" + brand.objectId;
    let options = {
      headers:this.authHeaders
    }

    delete brand.createdAt;
    delete brand.updatedAt;
    delete brand.objectId;
    delete brand.ACL;

    console.log(brand);
    return this.http.put(url, brand, options);
  }

  deleteByName(name){
    console.log("Del Name: " + name);
    this.brands.forEach((item,index,arr)=>{
      if(item.name == name){
        arr.splice(index,1)
      }
    })
  }

  deleteBrandById(id):Observable<Brand>{
    // let contact = this.contacts.find(item=>item.name == name)
    // return Observable.of(contact)

    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
      .delete(url,options)
      .map(data=>data.json())
      .finally(
        ()=>{}
      );
  }
   

}
