import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service'

@Component({
  selector: 'app-asset-analysis-page',
  templateUrl: './asset-analysis-page.component.html',
  styleUrls: ['./asset-analysis-page.component.scss']
})
export class AssetAnalysisPageComponent implements OnInit {

  assets: Array<Asset>
  constructor(private assetService: AssetService) {
    this.assetService.connect().subscribe(data => {
      this.assets = data

      this.showPercentOfClassification()
      this.showPerAnnualCompare()
      this.showPernnualTotalConsum()

    })
  }

sortYear(yearArr:string[]){
  yearArr.sort((a, b) => {
    if ( parseInt(a,0) > parseInt(b,0)) {
      return 1
    } else {
      return -1
    }
  })
}

  // 分类占比图表显示
  showPercentOfClassification() {

    // 通过dom获取指定id的内容显示区域
    let el = document.getElementById("percent-chart");
    if (!el) { return }
    let myChart = echarts.init(el);
    // 设置echarts所需配置项option

    if (this.assets.length > 0) {

      let legendArr = []
      for (let entry of this.assets) {
        if (legendArr.indexOf(entry.classification) < 0) {
          legendArr.push(entry.classification)
        }
      }

      

      let count = 0
      let seriesDataArr = [];
      for (let i = 0; i < legendArr.length; i++) {
        count = 0;
        for (let entry of this.assets) {
          if (entry.classification == legendArr[i]) {
            count++;
          }
        }
        seriesDataArr.push({ "value": count, "name": legendArr[i] })
      }

      let option = {
        title: {
          text: '类别占比图表',
          x: 'center'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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

  }

  // 历年买买买对比
  showPerAnnualCompare() {
    let el = document.getElementById("per-annual-compare");
    if (!el) { return }
    let myChart = echarts.init(el);

    if (this.assets.length > 0) {

      let legendArr = []
      let yAxisArr = []
      for (let entry of this.assets) {
        if (legendArr.indexOf(entry.classification) < 0) {
          legendArr.push(entry.classification)
        }
        if (yAxisArr.indexOf(entry.addTime.iso.substr(0, 4)) < 0) {
          yAxisArr.push(entry.addTime.iso.substr(0, 4))
        }
      }

      this.sortYear(yAxisArr)

      let series = [];
      for (let legend of legendArr) {
        let serieObj = {
          name: null,
          type: 'bar',
          stack: '总量',
          data: [],
          assetArr: [],
          label: {
              normal: {
                  show: true,
                  position: 'insideRight'
              }
          }
        }
        let assetArr = []
        for (let asset of this.assets) {
          if (asset.classification == legend) {
            assetArr.push(asset)
          }
        }
        serieObj.name=legend
        serieObj.assetArr=assetArr
        series.push(serieObj)
      }

      for (let ser of series) {
        ser.data = [];
        for (let yAxis of yAxisArr) {
          let count = 0;
          if(ser.assetArr != [] && ser.assetArr.length>0){
            for (let s of ser.assetArr) {
              if (s.addTime.iso.substr(0, 4) == yAxis) {
                count++;
              }
            } 
          }
          ser.data.push(count);
        }
        delete ser.assetArr
      }

      let option = {
        title: {
          text: '历年买买买对比'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: legendArr
        }, toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: yAxisArr
        },
        series: series
      };
      myChart.setOption(option);
    }
  }

  // 历年总消费趋势
  showPernnualTotalConsum() {
    let el = document.getElementById("per-annual-total-consum");
    if (!el) { return }
    let myChart = echarts.init(el);
    if (this.assets.length > 0) {

      let legendArr = []
      let yAxisArr = []
      for (let entry of this.assets) {
        if (legendArr.indexOf(entry.classification) < 0) {
          legendArr.push(entry.classification)
        }
        if (yAxisArr.indexOf(entry.addTime.iso.substr(0, 4)) < 0) {
          yAxisArr.push(entry.addTime.iso.substr(0, 4))
        }
      }

      this.sortYear(yAxisArr)

      let series = [];

      for (let legend of legendArr) {
        let serieObj = {
          name: null,
          type: 'line',
          stack: '总量',
          data: [],
          assetArr: []
        }
        let assetArr = []
        for (let asset of this.assets) {
          if (asset.classification == legend) {
            assetArr.push(asset)
          }
        }
        serieObj.name=legend
        serieObj.assetArr=assetArr
        series.push(serieObj)
      }

      for (let ser of series) {
        ser.data = [];
        for (let yAxis of yAxisArr) {
          let count = 0;
          if(ser.assetArr != [] && ser.assetArr.length>0){
            for (let s of ser.assetArr) {
              if (s.addTime.iso.substr(0, 4) == yAxis) {
                count++;
              }
            } 
          }
          ser.data.push(count);
        }
        delete ser.assetArr
      }

      let option = {
        title: {
          text: '历年总消费趋势'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legendArr
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
          data: yAxisArr
        },
        yAxis: {
          type: 'value'
        },
        series : series
      };

      myChart.setOption(option);
    }
  }

  ngOnInit() {

    this.showPercentOfClassification()
    this.showPerAnnualCompare()
    this.showPernnualTotalConsum()

  }

}
