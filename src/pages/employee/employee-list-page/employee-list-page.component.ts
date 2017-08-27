
import { Component, OnInit } from '@angular/core';

interface Employees{
  name:string,
  sex:string,
  age:number,
  position:string,
  random?:number
}

@Component({
  selector: 'app-employee-list-page',
  templateUrl: './employee-list-page.component.html',
  styleUrls: ['./employee-list-page.component.scss']
})
export class EmployeeListPageComponent implements OnInit {
  employees:Array<Employees>
  constructor() {
   this.getEmployees();
  }
  
  getEmployees(){
     this.employees = [
      {name:"张三",sex:"M",age:30,position:"Employee"},
      {name:"李四",sex:"F",age:21,position:"Manager"},
      {name:"王小川",sex:"M",age:25,position:"Employee"},
      {name:"李阳",sex:"F",age:42,position:"Employee"}
    ]
  }

  addEmployee(){
    let newEmployee = {
      name:"赵云",sex:"M",age:20,position:"Employee"
    }
    this.employees.push(newEmployee)
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
  ngOnInit() {
  }

}
