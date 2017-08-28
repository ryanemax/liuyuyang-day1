import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class BugService {

    // HTTP Params
    authHeaders: Headers = new Headers()
    host = "http://47.92.145.25:2337/parse"
    className = "Bug"

    constructor(private http: Http) {
        this.authHeaders.append("X-Parse-Application-Id", "dev")
        this.authHeaders.append("X-Parse-Master-Key", "angulardev")
        this.authHeaders.append("Content-Type", "application/json")
    }
    getBugs(): Observable<Array<Bug>> {
        let url = this.host + "/classes/" + this.className
        let options = {
            headers: this.authHeaders
        }

        return this.http
            .get(url, options)
            .map(data => data.json().results)
    }


    add(bugs: Array<Bug>) {
        // let newBug = {
        //     index: "PPS10010",
        //     level: "major",
        //     status: "not started"
        // }
        // bugs.push(newBug);
    }

    delete(objectId: String, bugs: Array<Bug>): Observable<Array<Bug>> {
        // let arrayIndex;
        // for (let i = 0; i < bugs.length; i++) {
        //     if (bugs[i].index == index) {
        //         arrayIndex = i;
        //         break;
        //     }
        // }
        // // delete bugs[arrayIndex];
        // bugs.splice(arrayIndex, 1);
        // console.log(bugs);

        let url = this.host + "/classes/" + this.className
        let options = {
            headers: this.authHeaders
        }
        return this.http.delete(url + '/' + objectId, options).map(data => data.json().results);
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
