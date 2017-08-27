import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmjItemComponent } from './pmj-item.component';

describe('PmjItemComponent', () => {
  let component: PmjItemComponent;
  let fixture: ComponentFixture<PmjItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmjItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmjItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
