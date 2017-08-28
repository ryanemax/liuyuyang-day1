
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
      this.employeeServ.deleteByName(employee.name)
    }
    edit(){
      this.employeeServ.editEmployee = this.employee
    }

  asc(){
    this.employeeServ.asc()
  }
  desc(){
    this.employeeServ.desc()
  }
  random(){
    this.employeeServ.random()
  }

  ngOnInit() {
  }
  
}
