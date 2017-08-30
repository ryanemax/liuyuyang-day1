import { Component, OnInit } from '@angular/core';
import { FastMailService } from '../fast-mail.service';

@Component({
  selector: 'app-fast-mail-analysis',
  templateUrl: './fast-mail-analysis.component.html',
  styleUrls: ['./fast-mail-analysis.component.scss']
})
export class FastMailAnalysisComponent implements OnInit {
  goodList: Array<Good> = new Array();
  fomartMap: Map<String, number> = new Map();

  titleList: Array<String> = new Array();
  dataList: Array<any> = new Array();

  constructor(private fService: FastMailService) { }

  ngOnInit() {
    this.fService.getGoods().subscribe(data => {
      this.goodList = data;

      this.goodList.forEach((good, i, arr) => {
        if (this.fomartMap.has(good.addr)) {
          let count = this.fomartMap.get(good.addr);
          this.fomartMap.set(good.addr, ++count);
        } else {
          this.fomartMap.set(good.addr, 1);
        }
      });
  
      this.fomartMap.forEach((obj, i, map) => {
        this.titleList.push(i);

        let tmpData: any = {
          value: this.fomartMap.get(i),
          name: i
        };
        this.dataList.push(tmpData);
      });

      this.initPie();
    });
  }

  initPie(){
    let el = document.getElementById("fastMailPie");
    if(!el){return;}
    let myChart = echarts.init(el);

    let option = {
      title : {
          text: '快递邮寄区域分布',
          x:'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data: this.titleList
      },
      series : [
        {
            name: '区域分布',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: this.dataList,
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

  myChart.setOption(option);
}

}
