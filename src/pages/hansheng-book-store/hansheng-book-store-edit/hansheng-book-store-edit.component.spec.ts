import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanshengBookStoreEditComponent } from './hansheng-book-store-edit.component';

describe('HanshengBookStoreEditComponent', () => {
  let component: HanshengBookStoreEditComponent;
  let fixture: ComponentFixture<HanshengBookStoreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanshengBookStoreEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanshengBookStoreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
