import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsInfoPageComponent } from './goods-info-page.component';

describe('GoodsInfoPageComponent', () => {
  let component: GoodsInfoPageComponent;
  let fixture: ComponentFixture<GoodsInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
