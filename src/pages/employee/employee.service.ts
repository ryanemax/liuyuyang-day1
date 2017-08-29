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

  // employees:Array<Employee>;
  editEmployee:Employee;
  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")
    
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

  getEmployees():Observable<Array<Employee>>{
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results)
  }

    saveEmployee(employee){
      // this.http.post()
      let url = this.host+"/classes/" + this.className
      let options = {
        headers:this.authHeaders
      }
      
      if(employee.objectId){
        let id = employee.objectId
        delete employee.createdAt
        delete employee.updatedAt
        delete employee.objectId
        delete employee.ACL
  
        return this.http
        .put(url+"/"+id,employee,options)
        .map(data=>data.json())
      }else{
        return this.http
        .post(url,employee,options)
        .map(data=>data.json())
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
  }
