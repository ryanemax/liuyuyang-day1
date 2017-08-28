import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JianglunBookButtonComponent } from './jianglun-book-button.component';

describe('JianglunBookButtonComponent', () => {
  let component: JianglunBookButtonComponent;
  let fixture: ComponentFixture<JianglunBookButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JianglunBookButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JianglunBookButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
