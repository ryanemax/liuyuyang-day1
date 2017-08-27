import { Component, OnInit } from '@angular/core';

interface Bug {
  index: string,
  level: string,
  status: string,
  assigneeName?: string,
}

@Component({
  selector: 'app-bug-list-page',
  templateUrl: './bug-list-page.component.html',
  styleUrls: ['./bug-list-page.component.scss']
})
export class BugListPageComponent implements OnInit {

  bugs: Array<Bug>;
  constructor() {
    this.getBugs()
  }

  getBugs() {
    this.bugs = [
      { index: "PPS10001", level: "block", status: "waiting for prod-test", assigneeName: "谢理" },
      { index: "PPS10004", level: "minor", status: "not started" },
      { index: "PPS10003", level: "major", status: "in development", assigneeName: "李四" },
      { index: "PPS10002", level: "crital", status: "waiting for pre-test", assigneeName: "张三" },
      { index: "PPS10005", level: "crital", status: "not started" },
    ]
  }

  addBug() {
    let newBug = {
      index: "PPS10010",
      level: "major",
      status: "not started"
    }
    this.bugs.push(newBug);
  }

  sortList(type: string) {
    if (type == "up") {
      this.asc();
    }
    if (type == "down") {
      this.desc();
    }
    if (type == "random") {
      this.random();
    }
  }

  asc() {
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.bugs.sort((a, b) => {
      if (a.index > b.index) {
        return 1
      } else {
        return -1
      }
    })
  }

  desc() {
    // 逆序排列   
    this.bugs.sort(
      (a, b) => {
        if (a.index > b.index) {
          return -1;
        } else {
          return 1;
        }
      }
    )
  }

  random() {
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.bugs.sort(
      (a, b) => {
        let randomA = Math.random();
        let randomB = Math.random();
        if (randomA > randomB) {
          return 1;
        } else {
          return -1;
        }
      }
    )
  }

  ngOnInit() {
  }

}
