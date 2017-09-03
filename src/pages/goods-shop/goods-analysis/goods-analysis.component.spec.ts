import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsAnalysisComponent } from './goods-analysis.component';

describe('GoodsAnalysisComponent', () => {
  let component: GoodsAnalysisComponent;
  let fixture: ComponentFixture<GoodsAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
