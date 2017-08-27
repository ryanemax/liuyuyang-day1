import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastMailHomeComponent } from './fast-mail-home.component';

describe('FastMailHomeComponent', () => {
  let component: FastMailHomeComponent;
  let fixture: ComponentFixture<FastMailHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastMailHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastMailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
