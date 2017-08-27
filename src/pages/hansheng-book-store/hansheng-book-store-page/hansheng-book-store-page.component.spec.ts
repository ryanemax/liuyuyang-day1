import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanshengBookStorePageComponent } from './hansheng-book-store-page.component';

describe('HanshengBookStorePageComponent', () => {
  let component: HanshengBookStorePageComponent;
  let fixture: ComponentFixture<HanshengBookStorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanshengBookStorePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanshengBookStorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
