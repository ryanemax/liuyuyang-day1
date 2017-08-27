import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanshengBookItemComponent } from './hansheng-book-item.component';

describe('HanshengBookItemComponent', () => {
  let component: HanshengBookItemComponent;
  let fixture: ComponentFixture<HanshengBookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanshengBookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanshengBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
