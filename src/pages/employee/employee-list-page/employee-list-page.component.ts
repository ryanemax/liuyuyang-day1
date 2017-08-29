
import { Component, OnInit ,Input} from '@angular/core';
import { EmployeeService} from "../employee.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-employee-list-page',
  templateUrl: './employee-list-page.component.html',
  styleUrls: ['./employee-list-page.component.scss']
})

export class EmployeeListPageComponent implements OnInit {
  @Input() employee:Employee

  employees:Array<Employee>
  constructor(private employeeServ:EmployeeService,private loc:Location) {
    this.employeeServ.getEmployees().subscribe(data=>{
      console.log("data:"+data);
      this.employees = data;
    });
  }

    delete(employee){
      this.employeeServ.deleteById(employee.objectId).subscribe(data=>{
        this.employeeServ.getEmployees().subscribe(data => {
          this.employees = data
        })
    })
    }
    edit(){
      this.employeeServ.editEmployee = this.employee
    }

  ngOnInit() {
  }

  asc(){
    // 正序排列
     this.employees.sort((a,b)=>{
       if(a.age>b.age){
         return 1
       }else{
         return -1
       }
     })
  }
   desc(){
    //  逆序排列    
     this.employees.sort((a,b)=>{
       if(a.age<b.age){
         return 1
       }else{
         return -1
       }
     })
   }
   random(){
   // 随机排列
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
