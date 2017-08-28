import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
@Injectable()
export class ZhangyuService {
  departments: Array<Department>;
  departmentVo: Department;
  constructor() { 
    this.queryDepartments();
  }
  queryDepartments(){
    this.departments = [
    {id: "1", name: '人事部', count: "4",createDate:new Date()},
    {id: "2", name: '管理部', count: "5",createDate:new Date()}, 
    {id: "3", name: '开发部', count: "50",createDate:new Date()},
    {id: "4", name: '后勤部', count: "10",createDate:new Date()},
    {id: "5", name: '总裁办公室', count: "6",createDate:new Date()}
    ]
  }
  addDepartment(department){
    this.departments.push(department);
  }
  getDepartmentById(id):Observable<Department>{
    let department = this.departments.find(item=>item.id == id)
    return Observable.of(department)
  }
  delDepartmentById(id){
    this.departments.forEach((item,index,arr)=>{
      if(item.id == id){
        arr.splice(index,1)
      }
    })
  }
}
