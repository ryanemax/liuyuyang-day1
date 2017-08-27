import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaobaoShoplistComponent } from './taobao-shoplist.component';

describe('TaobaoShoplistComponent', () => {
  let component: TaobaoShoplistComponent;
  let fixture: ComponentFixture<TaobaoShoplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaobaoShoplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaobaoShoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
