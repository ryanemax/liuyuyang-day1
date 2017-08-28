import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaobaoShopEditComponent } from './shop-edit.component';

describe('ContactEditComponent', () => {
  let component: TaobaoShopEditComponent;
  let fixture: ComponentFixture<TaobaoShopEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaobaoShopEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaobaoShopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
