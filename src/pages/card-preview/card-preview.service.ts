import {
  Injectable
} from '@angular/core';
import {
  Http,
  Headers
} from '@angular/http';

import {
  Observable
} from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {
  MdDialog
} from '@angular/material';
import {
  MdDialogRef
} from '@angular/material';
import {
  MdDialogConfig
} from '@angular/material';
import {
  DataSource
} from '@angular/cdk';
import {
  MdSort
} from '@angular/material';
import {
  BehaviorSubject
} from 'rxjs/BehaviorSubject';
@Injectable()

export class CardPreviewService {
  cards: Array < Card > ;
  card: Card;
  authHeaders: Headers = new Headers()
  // host = " http://localhost:1337/parse";
  host = "http://47.92.145.25:2337/parse";
  className = "CardPreview"
  constructor(private http: Http) {
    this.authHeaders.append("X-Parse-Application-Id", "dev")
    this.authHeaders.append("X-Parse-Master-Key", "angulardev")
    this.authHeaders.append("Content-Type", "application/json")
    // this.getCards().subscribe(data=>{

    //   this.cards = data;
    //   console.log(this.cards);
    // });
  }
  // getCards(){

  //     this.cards = [
  //      {name:"月火术",type:"法术",cost:0,vocation:"德鲁伊",img:"./assets/img/cardpreview/yuehuo.jpg"},
  //      {name:"辛达苟萨",type:"龙",cost:8,vocation:"法师",img:"./assets/img/cardpreview/xindagousa.jpg"},
  //      {name:"巨型蟒蛇",type:"野兽",cost:7,vocation:"德鲁伊",img:"./assets/img/cardpreview/juxingmangshe.jpg"},
  //      {name:"冰猴",type:"龙",cost:7,vocation:"中立",img:"./assets/img/cardpreview/binghou.jpg"},
  //      {name:"风暴看守者",type:"元素",cost:8,vocation:"中立",img:"./assets/img/cardpreview/fengbaokanshou.jpg"}
  // ];
  // }
  getCards(): Observable < Array < Card >> {

    let url = this.host + "/classes/" + this.className
    let options = {
      headers: this.authHeaders
    }

    return this.http
      .get(url, options)
      .map(data => data.json().results)
  }
  del(card) {
    let url = this.host + "/classes/" + this.className + "/" + card.objectId
    let options = {
      headers: this.authHeaders
    }
    return this.http.delete(url, options).map(data => data.json());
  }
  addCard(card: Card) {
    let url = this.host + "/classes/" + this.className
    let options = {
      headers: this.authHeaders
    }
    // card.cost = parseInt( "0"+card.cost,10);
    return this.http.post(url, card, options).map(data => data.json());
  }
  updateCard(card: Card) {
    let url = this.host + "/classes/" + this.className + "/" + card.objectId;
    let options = {
      headers: this.authHeaders
    }
    // card.cost = parseInt( "0"+card.cost,10);
    delete card.updatedAt;
    delete card.createdAt;
    delete card.objectId;
    delete card.ACL;
    return this.http.put(url, card, options).map(data => data.json());
  }
  getCardById(objectId): Observable < Card > {
    let url = this.host + "/classes/" + this.className + "/" + objectId;
    let options = {
      headers: this.authHeaders
    }
    return this.http.get(url, options).map(data => data.json());
  }


  asc(type) {
    switch (type) {
      case 0:
        this.cards.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case 1:
        this.cards.sort((a, b) => {
          if (a.type > b.type) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case 2:
        this.cards.sort((a, b) => {
          if (a.cost > b.cost) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case 3:
        this.cards.sort((a, b) => {
          if (a.vocation > b.vocation) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
    }
  }
  desc(type) {
    switch (type) {
      case 0:
        this.cards.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case 1:
        this.cards.sort((a, b) => {
          if (a.type < b.type) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case 2:
        this.cards.sort((a, b) => {
          if (a.cost < b.cost) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case 3:
        this.cards.sort((a, b) => {
          if (a.vocation < b.vocation) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
    }
  }
  random() {
    this.cards.forEach((item) => {
      item.random = Math.random();
    });
    this.cards.sort((a, b) => {
      if (a.random < b.random) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
export class CardDatabase {
  cards: Array < Card > ;
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject < Card[] > = new BehaviorSubject < Card[] > ([]);
  get data(): Card[] {
    return this.dataChange.value;
  }

  constructor(private cardPreviewService: CardPreviewService) {
    this.refresh();
  }
  refresh() {
    this.cardPreviewService.getCards().subscribe(data => {
           console.log(data);
      this.dataChange.next(data);
    })
  }
  add(card: Card) {
    this.cardPreviewService.addCard(card).subscribe(data => {

    });
  }
  update(card: Card) {
    this.cardPreviewService.updateCard(card).subscribe(data => {

    });
  }
  del(card) {
    this.cardPreviewService.del(card).subscribe(data => {
      this.refresh();
    });
  }
}
export class CardDataSource extends DataSource < any > {
  constructor(private _carDatabase: CardDatabase, private _sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable < Card[] > {
    const displayDataChanges = [
      this._carDatabase.dataChange,
      this._sort.mdSortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }
  refresh() {
    this._carDatabase.refresh()
  }
  disconnect() {}

  /** Returns a sorted copy of the database data. */
  getSortedData(): Card[] {
    const data = this._carDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'cost':
          [propertyA, propertyB] = [a.cost, b.cost];
          break;
        case 'type':
          [propertyA, propertyB] = [a.type, b.type];
          break;
        case 'vocation':
          [propertyA, propertyB] = [a.vocation, b.vocation];
          break;
        case 'img':
          [propertyA, propertyB] = [a.img, b.img];
          break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}
