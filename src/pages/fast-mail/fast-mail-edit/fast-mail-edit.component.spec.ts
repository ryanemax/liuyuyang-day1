import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastMailEditComponent } from './fast-mail-edit.component';

describe('FastMailEditComponent', () => {
  let component: FastMailEditComponent;
  let fixture: ComponentFixture<FastMailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastMailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastMailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
