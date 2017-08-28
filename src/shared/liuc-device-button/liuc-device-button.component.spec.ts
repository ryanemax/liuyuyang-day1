import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiucDeviceButtonComponent } from './liuc-device-button.component';

describe('LiucDeviceButtonComponent', () => {
  let component: LiucDeviceButtonComponent;
  let fixture: ComponentFixture<LiucDeviceButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiucDeviceButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiucDeviceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
