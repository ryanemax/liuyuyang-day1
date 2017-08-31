import { Component, OnInit } from '@angular/core';
import {AssetService} from '../asset.service'

@Component({
  selector: 'app-asset-analysis-page',
  templateUrl: './asset-analysis-page.component.html',
  styleUrls: ['./asset-analysis-page.component.scss']
})
export class AssetAnalysisPageComponent implements OnInit {

  assets:Array<Asset>
  constructor(private assetService:AssetService) { 
    this.assetService.connect().subscribe(data => {
      this.assets = data
    })
  }

  // 分类占比图表显示
  showPercentOfClassification() {

    // 通过dom获取指定id的内容显示区域
    let el = document.getElementById("percent-chart");
    if (!el) { return }
    let myChart = echarts.init(el);
    // 设置echarts所需配置项option

    console.log(this.assetService.assets)
    for (let entry of this.assets) {
        console.log(entry);
    }
    
    let legendArr = ['围巾', '包包', '鞋靴', '裙装', '上衣', '裤装']
    let seriesDataArr = [
      { value: 1, name: '围巾' },
      { value: 2, name: '包包' },
      { value: 3, name: '鞋靴' },
      { value: 4, name: '裙装' },
      { value: 5, name: '上衣' },
      { value: 6, name: '裤装' }
    ];

    let option = {
      title: {
        text: '类别占比图表',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: legendArr
      },
      series: [
        {
          name: '类别占比',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: seriesDataArr,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  // 历年买买买对比
  showPerAnnualCompare() {
    let el = document.getElementById("per-annual-compare");
    if (!el) { return }
    let myChart = echarts.init(el);
    
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
          data: [320, 302, 301, 334, 390, 330, 320]
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
          data: [120, 132, 101, 134, 90, 230, 210]
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
          data: [220, 182, 191, 234, 290, 330, 310]
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
          data: [150, 212, 201, 154, 190, 330, 410]
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
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    myChart.setOption(option);
  }

  // 历年总消费趋势
  showPernnualTotalConsum() {
    let el = document.getElementById("per-annual-total-consum");
    if (!el) { return }
    let myChart = echarts.init(el);
    let option = {
      title: {
        text: '折线图堆叠'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    myChart.setOption(option);
  }

  ngOnInit() {
    this.showPercentOfClassification()
    this.showPerAnnualCompare()
    this.showPernnualTotalConsum()
  }

}
