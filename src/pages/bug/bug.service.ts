import { Injectable } from '@angular/core';

interface Bug {
    index: string,
    level: string,
    status: string,
    assigneeName?: string,
}

@Injectable()
export class BugService {

    constructor() {

    }

    getBugs() {
        let bugs: Array<Bug>;
        bugs = [
            { index: "PPS10001", level: "block", status: "waiting for prod-test", assigneeName: "谢理" },
            { index: "PPS10004", level: "minor", status: "not started" },
            { index: "PPS10003", level: "major", status: "in development", assigneeName: "李四" },
            { index: "PPS10002", level: "crital", status: "waiting for pre-test", assigneeName: "张三" },
            { index: "PPS10005", level: "crital", status: "not started" },
        ];
        return bugs;
    }

    add(bugs: Array<Bug>) {
        let newBug = {
            index: "PPS10010",
            level: "major",
            status: "not started"
        }
        bugs.push(newBug);
    }

    delete(index: String, bugs: Array<Bug>) {
        let arrayIndex;
        for (let i = 0; i < bugs.length; i++) {
            if (bugs[i].index == index) {
                arrayIndex = i;
                break;
            }
        }
        // delete bugs[arrayIndex];
        bugs.splice(arrayIndex, 1);
        console.log(bugs);
    }

    sortList(type: string, bugs: Array<Bug>) {
        if (type == "up") {
            this.asc(bugs);
        }
        if (type == "down") {
            this.desc(bugs);
        }
        if (type == "random") {
            this.random(bugs);
        }
    }

    asc(bugs: Array<Bug>) {
        // 正序排列
        // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
        bugs.sort((a, b) => {
            if (a.index > b.index) {
                return 1
            } else {
                return -1
            }
        })
    }

    desc(bugs: Array<Bug>) {
        // 逆序排列   
        bugs.sort(
            (a, b) => {
                if (a.index > b.index) {
                    return -1;
                } else {
                    return 1;
                }
            }
        )
    }

    random(bugs: Array<Bug>) {
        // 随机排列
        // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
        bugs.sort(
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

}
