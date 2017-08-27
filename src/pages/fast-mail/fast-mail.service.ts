import { Injectable } from '@angular/core';

@Injectable()
export class FastMailService {
  goodList: Array<Good>;

  constructor() {
    this.initGoodData();
   }

  initGoodData() {
    this.goodList = [
      {name: 'Lily', tel: '152-XXXX-8861', addr: 'DaLian Soft Park', date: '2017-3-23', index: 0},
      {name: 'Elizabeth', tel: '156-XXXX-7623', addr: 'DaLian Soft Park', date: '2017-6-15', index: 1},
      {name: 'Camille', tel: '189-XXXX-0959', addr: 'DaLian Soft Park', date: '2017-1-28', index: 2},
      {name: 'Christina', tel: '189-XXXX-8735', addr: 'DaLian Soft Park', date: '2017-8-6', index: 3},
      {name: 'Darcy', tel: '139-XXXX-9484', addr: 'DaLian Soft Park', date: '2017-9-26', index: 4}
    ];
  }

  getGoods():(Array<Good>) {
    return this.goodList;
  }

  addGoods(good: Good): void {
    this.goodList.push(good);
  }

  deleteGoodsById(index: number): void {
    this.goodList.forEach((good, i, arr) => {
      if (good.index == index) {
        arr.splice(i, 1);
      }
    });
  }

  getGoodsById(index: number): Good {
    let flag = -1;
    this.goodList.forEach((good, i, arr) => {
      if (good.index == index) {
        flag = i;
      }
    });

    return this.goodList[flag];
  }

  getListLength(): number {
      return this.goodList.length;
  }

  onAscSortClick(): void {
    this.goodList.sort((g1, g2) => {
        return g1.index < g2.index ? 0 : 1;
    });
  }

  onDescSortClick(): void {
    this.goodList.sort((g1, g2) => {
      return g1.index < g2.index ? 1 : 0;
    });
  }

  onRandomSortClick(): void {
    this.goodList.sort((g1, g2) => {
      g1.index = Math.random();
      g2.index = Math.random();
      return g1.index < g2.index ? 1 : 0;
    });
  }

}
