import {
  Injectable
} from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';


@Injectable()
export class PlayerService {
  players: Array<FootballPlayer>;
  editObject: FootballPlayer;

  getPlayers() {
    this.players = [{
        name: "卢卡库",
        goal: 3,
        assist: 3,
        team: "曼联",
        age: 20,
        palyerMinutes: 200
      },
      {
        name: "鲁尼",
        goal: 2,
        assist: 1,
        team: "埃弗顿",
        palyerMinutes: 100
      },
      {
        name: "博格巴",
        goal: 2,
        assist: 2,
        team: "曼联",
        palyerMinutes: 300
      },
      {
        name: "姆希塔良",
        goal: 0,
        assist: 4,
        team: "曼联",
        palyerMinutes: 400
      },
      {
        name: "凯恩",
        goal: 0,
        assist: 0,
        team: "热刺",
        palyerMinutes: 250
      }
    ]
  }


  goalSort() {
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.players.sort((a, b) => {
      if (a.goal > b.goal) {
        return -1
      } else {
        return 1
      }
    })
  }

  getPlayerByName(name):Observable<FootballPlayer>{
    let player = this.players.find(item=>item.name == name)
    return Observable.of(player)
  }

  deleteByName(name) {
    console.log(name);
    this.players.forEach((item, index, arr) => {
      if (item.name == name) {
        arr.splice(index, 1)
      }
    })
  }

  addPlayer(player) {
    this.players.push(player)
  }


  assistSort() {
    // 逆序排列   
    this.players.sort((a, b) => {
      if (a.assist > b.assist) {
        return -1
      } else {
        return 1
      }
    })
  }
  random() {
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.players.forEach(item => {
      item.random = Math.random();

    })
    this.players.sort((a, b) => {
      if (a.random > b.random) {
        return 1
      } else {
        return -1
      }
    })
  }



  constructor() {
    this.getPlayers();
  }

}
