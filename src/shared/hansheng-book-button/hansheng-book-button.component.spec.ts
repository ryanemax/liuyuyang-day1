import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanshengBookButtonComponent } from './hansheng-book-button.component';

describe('HanshengBookButtonComponent', () => {
  let component: HanshengBookButtonComponent;
  let fixture: ComponentFixture<HanshengBookButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanshengBookButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanshengBookButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
