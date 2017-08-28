import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirButtonComponent } from './cir-button.component';

describe('CirButtonComponent', () => {
  let component: CirButtonComponent;
  let fixture: ComponentFixture<CirButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
