import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
@Injectable()
export class ZhangyuService {
  departments: Array<Department>;
  departmentVo: Department;
  // HTTP Params
  authHeaders:Headers = new Headers();
  host = "http://47.92.145.25:2337/parse";
  className = "DepartmentCustm";
  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")
 
  }
departments1: Array<any>= [
    {depId: 1, name: '管理部', createDate: new Date(),  count: '50'},
    {depId: 3, name: '事业部', createDate: new Date(), count: '60'},
    {depId: 2, name: '后勤部', createDate: new Date(),  count: '70'},
    {depId: 5, name: '开发部', createDate: new Date(),  count: '80'},
    {depId: 4, name: '倒霉不', createDate: new Date(),  count: '80'}
  ];

queryDepartments1():Array<Department>{
  return this.departments1;
}
// getCountList():
getDepartmentNameList1(): Array<any>{
 let departmentNameList = [];
 this.departments1.forEach(item=>{
  departmentNameList.push(item.name);
 });

 return departmentNameList;
}


  queryDepartments():Observable<Array<Department>>{
   let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results);

  }
  addDepartment(department){
    this.departments.push(department);
  }
  getDepartmentById(id):Observable<Department>{
    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json())
   
  }
  delDepartmentById(objectId){
    let url = this.host+"/classes/" + this.className + "/" + objectId
    let options = {
      headers:this.authHeaders
    }
    return this.http
    .delete(url,options)
    .map(data=>data.json());

  }
  saveDepartment(department){
     let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    if(department.objectId){
      let id = department.objectId
      delete department.createdAt
      delete department.updatedAt
      delete department.objectId
      delete department.ACL

      return this.http
      .put(url+"/"+id,department,options)
      .map(data=>data.json())
    }else{
      return this.http
      .post(url,department,options)
      .map(data=>data.json())
    }
  }
}
