import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMerchantPageComponent } from './edit-merchant-page.component';

describe('EditMerchantPageComponent', () => {
  let component: EditMerchantPageComponent;
  let fixture: ComponentFixture<EditMerchantPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMerchantPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMerchantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
