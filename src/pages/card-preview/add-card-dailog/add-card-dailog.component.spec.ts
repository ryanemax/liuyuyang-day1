import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardDailogComponent } from './add-card-dailog.component';

describe('AddCardDailogComponent', () => {
  let component: AddCardDailogComponent;
  let fixture: ComponentFixture<AddCardDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCardDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
