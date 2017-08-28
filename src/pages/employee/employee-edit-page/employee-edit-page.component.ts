import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {EmployeeService} from '../employee.service'
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-employee-edit-page',
  templateUrl: './employee-edit-page.component.html',
  styleUrls: ['./employee-edit-page.component.scss']
})
export class EmployeeEditPageComponent implements OnInit {
  employee:Employee = {
    eid:0,
    name:"",
    sex:"",
    age:0,
    position:""
  }
  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
  private employeetServ:EmployeeService,
  public dialog: MdDialog) { 
    if(employeetServ.editEmployee){
      this.employee = employeetServ.editEmployee
    }
  }
  
  save(){
    if(this.employee.eid == 0 || this.employee.name==""||this.employee.sex==""||this.employee.position=="" || this.employee.age==0){
      alert("请输入完整信息！")
      return
    }
    if(this.isNew){
      this.employeetServ.addEmployee(this.employee)
    }
    this.back()
  }
  back(){
    this.loc.back()
  }
  ngOnInit() {
            this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            this.isNew = true;
          }else{
            this.employeetServ.getEmployeeById(id).subscribe(employee=>{
            this.employee = employee
        })
      }

    })
  }

}
