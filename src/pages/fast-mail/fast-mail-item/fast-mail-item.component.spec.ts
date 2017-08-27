import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastMailItemComponent } from './fast-mail-item.component';

describe('FastMailItemComponent', () => {
  let component: FastMailItemComponent;
  let fixture: ComponentFixture<FastMailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastMailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastMailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
