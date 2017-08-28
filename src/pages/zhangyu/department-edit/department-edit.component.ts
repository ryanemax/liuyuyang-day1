import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ZhangyuService } from "../zhangyu.service";
@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {

  editDepartment: Department = {
    depId:"",
    createDate:new Date(),
    name:"",
    count:""
  }
  isNew:boolean
  constructor( private route: ActivatedRoute, private loc:Location, private zhangyuServ:ZhangyuService) { 
    if(zhangyuServ.departmentVo){
      this.editDepartment = zhangyuServ.departmentVo;
    }
    
  }
 back(){
    this.loc.back();
  }
  saveDepartment(){
  if(this.editDepartment.depId == ""||this.editDepartment.name==""||this.editDepartment.count==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    this.zhangyuServ.saveDepartment(this.editDepartment).subscribe(data=>{
        this.back()
    })
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            this.isNew = true;
          }else{
            this.zhangyuServ.getDepartmentById(id).subscribe(department=>{
            this.editDepartment = department
        })
       }
    })
  }
}
