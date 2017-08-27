import { Component, OnInit, Input } from '@angular/core';
import { ZhangyuService } from "../zhangyu.service";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  @Input() department: Department;
  departmentList: Array<any>;

  constructor(private zhangyuServ:ZhangyuService) {
    this.departmentList = this.zhangyuServ.departments;
  }

  ngOnInit() {
  }
  delDepartment(department){
    this.zhangyuServ.delDepartmentById(department.id);
  }

}
