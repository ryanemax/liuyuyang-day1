import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineContactUsComponent } from './airline-contact-us.component';

describe('AboutPageComponent', () => {
  let component: AirlineContactUsComponent;
  let fixture: ComponentFixture<AirlineContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
