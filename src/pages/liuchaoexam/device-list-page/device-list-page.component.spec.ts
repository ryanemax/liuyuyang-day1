import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceListPageComponent } from './device-list-page.component';

describe('DeviceListPageComponent', () => {
  let component: DeviceListPageComponent;
  let fixture: ComponentFixture<DeviceListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
