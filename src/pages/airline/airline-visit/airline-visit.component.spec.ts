import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineVisitComponent } from './airline-visit.component';

describe('AirlineVisitComponent', () => {
  let component: AirlineVisitComponent;
  let fixture: ComponentFixture<AirlineVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
