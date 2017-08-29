import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class BugService {

    // HTTP Params
    authHeaders: Headers = new Headers();
    host = "http://47.92.145.25:2337/parse"
    // host = "http://localhost:1337/parse"
    className = "Bug";
    url = this.host + "/classes/" + this.className
    options = {
        headers: this.authHeaders
    };

    constructor(private http: Http) {
        this.authHeaders.append("X-Parse-Application-Id", "dev")
        this.authHeaders.append("X-Parse-Master-Key", "angulardev")
        this.authHeaders.append("Content-Type", "application/json")
    }
    getBugs(): Observable<Array<Bug>> {
        return this.http
            .get(this.url, this.options)
            .map(data => data.json().results)
    }

    getBug(objectId: String): Observable<Bug> {
        return this.http.get(this.url + '/' + objectId, this.options).map(data => data.json());
    }

    saveBug(bug: Bug): Observable<Bug> {
        
        let id = bug.objectId;
        delete bug.ACL;
        delete bug.objectId;
        delete bug.createdAt;
        delete bug.updatedAt;
        if (id) {
            return this.http.put(this.url + '/' + id, bug, this.options).map(data => data.json())
        }
        return this.http.post(this.url, bug, this.options).map(data => data.json())
    }

    delete(objectId: String): Observable<Bug> {
        return this.http.delete(this.url + '/' + objectId, this.options).map(data => data.json().results);
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
