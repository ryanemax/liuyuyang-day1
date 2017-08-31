import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDatagridComponent } from './device-datagrid.component';

describe('DeviceDatagridComponent', () => {
  let component: DeviceDatagridComponent;
  let fixture: ComponentFixture<DeviceDatagridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
