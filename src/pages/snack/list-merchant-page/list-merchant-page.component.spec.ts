import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMerchantPageComponent } from './list-merchant-page.component';

describe('ListMerchantPageComponent', () => {
  let component: ListMerchantPageComponent;
  let fixture: ComponentFixture<ListMerchantPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMerchantPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMerchantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
