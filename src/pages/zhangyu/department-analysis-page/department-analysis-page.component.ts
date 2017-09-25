import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ZhangyuService } from "../zhangyu.service";
import {  Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-department-analysis-page',
  templateUrl: './department-analysis-page.component.html',
  styleUrls: ['./department-analysis-page.component.scss']
})
export class DepartmentAnalysisPageComponent implements OnInit {
  departmentList: Array<any>;
  departmentNameList: Array<string> = [];
  constructor(meta: Meta, title: Title,private zhangyuServ:ZhangyuService) {
     this.zhangyuServ.queryDepartments().subscribe(data=>{
     this.departmentList = data;
    
     title.setTitle('统计分析');
     meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
     ]);
    });
    
     
     
   }

  showDepartmentBar(){
     
      
        // 通过dom获取指定id的内容显示区域
        let el = document.getElementById("departmentBar");
        if(!el){return}        
        let myChart = echarts.init(el);
        // 设置echarts所需配置项option
        myChart.title = "堆叠条形图";
        let option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis:  {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: this.queryDeparmentNameList()
            },
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [320, 302, 301, 334, 390]
                },
                {
                    name: '邮件营销',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [120, 132, 101, 134, 90]
                },
                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [220, 182, 191, 234, 290]
                },
                {
                    name: '视频广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [150, 212, 201, 154, 190]
                },
                {
                    name: '搜索引擎',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [820, 832, 901, 934, 1290]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
  }

  ngOnInit() {
    this.showDepartmentBar();
  }
  queryDeparmentNameList(){
      this.zhangyuServ.queryDepartments().subscribe(data=>{
        this.departmentList = data;
        return this.departmentList.map(item=>item.name);
      });
    console.log(this.departmentList);
    
  }
}
