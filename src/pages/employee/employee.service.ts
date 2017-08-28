import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "Employee"

  employees:Array<Employee>;
  editEmployee:Employee;
  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")
    this.getEmployeeById("3QWvJZok2P").subscribe(data=>{
      console.log(data)
    })
    this.getEmployees();
  }

  getEmployeeById(id):Observable<Employee>{
    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json())
  }

  getEmployees(){
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results)
 }

 addEmployee(employee:Employee){
   this.employees.push(employee)
 }

 deleteByName(name){
  this.employees.forEach((item,index,arr)=>{
    if(item.name == name){
      arr.splice(index,1)
    }
  })
}

 asc(){
   this.employees.sort((a,b)=>{
     if(a.age>b.age){
       return 1
     }else{
       return -1
     }
   })
}
 desc(){
   // 逆序排列    
   this.employees.sort((a,b)=>{
     if(a.age<b.age){
       return 1
     }else{
       return -1
     }
   })
 }
 random(){

   this.employees.forEach((employee)=>{
     let randomNum = Math.random();
     employee.random = randomNum;
   });
   
   this.employees.sort((a,b)=>{
     if(a.random<b.random){
       return 1
     }else{
       return -1
     }
   })
 }

}
