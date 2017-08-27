import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyButtonComponent } from './diy-button.component';

describe('DiyButtonComponent', () => {
  let component: DiyButtonComponent;
  let fixture: ComponentFixture<DiyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
