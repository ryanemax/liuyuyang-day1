import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zhangyu-exam-page',
  templateUrl: './zhangyu-exam-page.component.html',
  styleUrls: ['./zhangyu-exam-page.component.scss']
})
export class ZhangyuExamPageComponent implements OnInit {

goods: Array<any>= [
    {index: 1, name: '红楼梦', spec: '本', price: '100', count: '50'}
    , {index: 3, name: '可口可乐', spec: '瓶', price: '90', count: '60'}
    , {index: 2, name: 'ipad', spec: '台', price: '80', count: '70'}
    , {index: 5, name: 'T shirt', spec: '件', price: '70', count: '80'}
    , {index: 4, name: '茶叶', spec: '斤', price: '70', count: '80'}
  ];

    constructor() {
  
  }

  ngOnInit() {
  }
  sortByUp() {
    this.goods.sort((a, b) => {
      if (a.index > b.index) {
        return 1;
      }
      if (a.index < b.index) {
        return -1;
      }
      return 0;
    });
  }
  sortByDown() {
   this.goods.sort((a, b) => {
      if (a.index < b.index) {
        return 1;
      }
      if (a.index > b.index) {
        return -1;
      }
      return 0;
    });
  }
  sortByRandom() {
    this.goods.sort((a, b) => {
      if (Math.random() > 0.5) {
        return 1;
      }
      if (Math.random() < 0.5) {
        return -1;
      }
      return 0;
    });
  }
}
