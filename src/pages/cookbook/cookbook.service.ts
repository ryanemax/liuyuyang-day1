import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { Location } from '@angular/common';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable"

import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/startWith';

import {DataSource} from '@angular/cdk';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/from';

import { Parse } from '../../cloud/cloud';


@Injectable()
export class CookbookService {
  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "Cookbook"
  // contacts:Array<Contact>; cookbooks: Array<Cookbook>;
  editObject:Cookbook;
  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")

    this.getCookbookById("").subscribe(data=>{
      console.log(data)
    })
  }
  /*
  getContactByName(name):Observable<Contact>{
    // let contact = this.contacts.find(item=>item.name == name)
    // return Observable.of(contact)
    return
  }
  */
  getCookbookById(id):Observable<Cookbook>{
    // let contact = this.contacts.find(item=>item.name == name)
    // return Observable.of(contact)

    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json())
  }

  getCookbook():Observable<Array<Cookbook>>{

    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results) 
  }
  
saveCookbook(cookbook){
    // this.http.post()
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }
    
    if(cookbook.objectId){
      let id = cookbook.objectId
      delete cookbook.createdAt
      delete cookbook.updatedAt
      delete cookbook.objectId
      delete cookbook.ACL
      // 删除掉没用的字段

      return this.http
      .put(url+"/"+id,cookbook,options)
      .map(data=>data.json())
      // 更新
    
    }else{
      return this.http
      .post(url,cookbook,options)
      .map(data=>data.json())
      // 添加
    }
  }

  deleteById(id){
    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .delete(url,options)
    .map(data=>data.json())
  }


/*
  addCookbook(cookbook){

    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .post(url,options)
    .map(data=>data.json().results) 

    // this.http.post()
  }
  updateContact(contact){
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .put(url,options)
    .map(data=>data.json().results) 

    // this.http.put()
  }
  deleteById(id){
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .delete(url,options)
    .map(data=>data.json().results) 

    // this.http.delete()
  }

  */

}
