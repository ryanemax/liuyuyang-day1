import { Component, OnInit } from '@angular/core';
import { GoodsShopService } from "../goods-shop.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-goods-analysis',
  templateUrl: './goods-analysis.component.html',
  styleUrls: ['./goods-analysis.component.scss']
})
export class GoodsAnalysisComponent implements OnInit {
  goods:Array<any>;

  constructor(private goodsServ: GoodsShopService,private loc:Location) {
    this.goodsServ.connect().subscribe(data => {
      this.goods = data
      console.log(data)
      this.showPercentOfClassification()
    })
   }

  showPercentOfClassification() {

    // 通过dom获取指定id的内容显示区域
    let el = document.getElementById("percent-chart");
    if (!el) { return }
    let myChart = echarts.init(el);
    // 设置echarts所需配置项option

    if (this.goods.length > 0) {

      let legendArr = []
      for (let entry of this.goods) {
        if (legendArr.indexOf(entry.price) < 0) {
          legendArr.push(entry.price)
        }
      }

      let count = 0
      let seriesDataArr = [];
      for (let i = 0; i < legendArr.length; i++) {
        count = 0;
        for (let entry of this.goods) {
          if (entry.price == legendArr[i]) {
            count++;
          }
        }
        seriesDataArr.push({ "value": count, "name": legendArr[i] })
      }

      let option = {
        title: {
          text: '价格占比图表',
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
            name: '价格占比',
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

  back(){
    this.loc.back()
  }

  ngOnInit() {
    this.showPercentOfClassification()
  }

}
