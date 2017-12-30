import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-datagrid',
  templateUrl: './device-datagrid.component.html',
  styleUrls: ['./device-datagrid.component.scss']
})
export class DeviceDatagridComponent implements OnInit {
 
  displayedColumns = ['deviceId', 'name', 'type', 'factory','price'];
  
  dataSource:ExampleDataSource | null;

  @ViewChild('filter') filter: ElementRef;

  constructor(private deviceSer:DeviceService) { 
  
  }

  ngOnInit() {
     this.dataSource=new ExampleDataSource(this.deviceSer);
     Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }

}

export class ExampleDataSource extends MatTableDataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }
  dataChange: BehaviorSubject<DeviceInfo[]> = new BehaviorSubject<DeviceInfo[]>([]);
  get data(): DeviceInfo[] { return this.dataChange.value; }

  constructor(private devSer:DeviceService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  // connect(): Observable<DeviceInfo[]> {
  connect(): any {
        // return this.devSer.getDevices();
     this.dataChange=this.devSer.getSubject();
    const displayDataChanges=[this.dataChange,this._filterChange];
     console.log(displayDataChanges);
    return Observable.merge(...displayDataChanges).map(() => {
      return this.data.slice().filter((item: DeviceInfo) => {
        let searchStr = (item.name + item.factory + item.deviceId).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() {}
}

