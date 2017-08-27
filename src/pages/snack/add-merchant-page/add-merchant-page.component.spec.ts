import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMerchantPageComponent } from './add-merchant-page.component';

describe('AddMerchantPageComponent', () => {
  let component: AddMerchantPageComponent;
  let fixture: ComponentFixture<AddMerchantPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMerchantPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMerchantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
