import { Component, OnInit } from '@angular/core';


interface Card{
  name:string,
  type:string,
  cost:number,
  vocation:string,
  img:string,
  random?:number
}
@Component({
  selector: 'app-card-preview-manager',
  templateUrl: './card-preview-manager.component.html',
  styleUrls: ['./card-preview-manager.component.scss']
})
export class CardPreviewManagerComponent implements OnInit {
  cards:Array<Card>;
  clickCount:number = 0;
  sortTypeTmp:number = 0;
  constructor() { 
    this.getCards();
  }

  ngOnInit() {
  }
  getCards(){
    this.cards = [
     {name:"月火术",type:"法术",cost:0,vocation:"德鲁伊",img:""},
     {name:"辛达苟萨",type:"龙",cost:8,vocation:"法师",img:""},
     {name:"巨型蟒蛇",type:"野兽",cost:7,vocation:"德鲁伊",img:""},
     {name:"精神控制",type:"法术",cost:10,vocation:"牧师",img:""},   
     {name:"冰猴",type:"龙",cost:7,vocation:"中立",img:""},
     {name:"风暴看守者",type:"元素",cost:8,vocation:"中立",img:""}
];
  }
  sort(type) {
    if ( type !== this.sortTypeTmp) {
       this.clickCount = 0;
       this.sortTypeTmp = type;
    }
    if (this.clickCount === 0) {
      this.asc(type);
      this.clickCount++;
    }else if (this.clickCount === 1) {
      this.desc(type);
      this.clickCount++;
    }else if (this.clickCount === 2) {
      this.random();
      this.clickCount = 0;
    }
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


