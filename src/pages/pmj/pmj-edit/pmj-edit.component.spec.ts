import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmjEditComponent } from './pmj-edit.component';

describe('PmjEditComponent', () => {
  let component: PmjEditComponent;
  let fixture: ComponentFixture<PmjEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmjEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmjEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
