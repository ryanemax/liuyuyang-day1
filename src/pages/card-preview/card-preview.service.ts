import { Injectable } from '@angular/core';

@Injectable()

export class CardPreviewService {
  cards:Array<Card>;
  
  constructor() { 
    this.getCards();
  }
  getCards(){
    this.cards = [
     {name:"月火术",type:"法术",cost:0,vocation:"德鲁伊",img:"./assets/img/cardpreview/yuehuo.jpg"},
     {name:"辛达苟萨",type:"龙",cost:8,vocation:"法师",img:"./assets/img/cardpreview/xindagousa.jpg"},
     {name:"巨型蟒蛇",type:"野兽",cost:7,vocation:"德鲁伊",img:"./assets/img/cardpreview/juxingmangshe.jpg"},
     {name:"冰猴",type:"龙",cost:7,vocation:"中立",img:"./assets/img/cardpreview/binghou.jpg"},
     {name:"风暴看守者",type:"元素",cost:8,vocation:"中立",img:"./assets/img/cardpreview/fengbaokanshou.jpg"}
];
  }

  asc(type) {
    switch (type) {
    case 0:
    this.cards.sort((a, b) => {
      if ( a.name > b.name) {
        return 1;
      }else {
        return -1;
      }});
      break;
    case 1:
    this.cards.sort((a, b) => {
      if ( a.type > b.type) {
        return 1;
      }else {
        return -1;
      }});
      break;
      case 2:
      this.cards.sort((a, b) => {
        if ( a.cost > b.cost) {
          return 1;
        }else {
          return -1;
        }});
        break;
        case 3:
        this.cards.sort((a, b) => {
          if ( a.vocation > b.vocation) {
            return 1;
          }else {
            return -1;
          }});
          break;
      }
    }
    desc(type) {
      switch (type) {
      case 0:
      this.cards.sort((a, b) => {
        if ( a.name < b.name) {
          return 1;
        }else {
          return -1;
        }});
        break;
      case 1:
      this.cards.sort((a, b) => {
        if ( a.type < b.type) {
          return 1;
        }else {
          return -1;
        }});
        break;
        case 2:
        this.cards.sort((a, b) => {
          if ( a.cost < b.cost) {
            return 1;
          }else {
            return -1;
          }});
          break;
          case 3:
          this.cards.sort((a, b) => {
            if ( a.vocation < b.vocation) {
              return 1;
            }else {
              return -1;
            }});
            break;
        }
      }
      random() {
        this.cards.forEach((item) => {
            item.random =  Math.random();
        });
        this.cards.sort((a, b) => {
          if ( a.random < b.random) {
            return 1;
          }else {
            return -1;
          }});
        }
}
