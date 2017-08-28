import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class EmployeeService {
  employees:Array<Employee>;
  editEmployee:Employee;
  constructor() { 
    this.getEmployees();
  }

  getEmployeeByName(name):Observable<Employee>{
    let employee = this.employees.find(item=>item.name == name)
    return Observable.of(employee)
  }

  getEmployees(){
    this.employees = [
     {name:"张三",sex:"M",age:30,position:"Employee"},
     {name:"李四",sex:"F",age:21,position:"Manager"},
     {name:"王小川",sex:"M",age:25,position:"Employee"},
     {name:"李阳",sex:"F",age:42,position:"Employee"}
   ]
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
