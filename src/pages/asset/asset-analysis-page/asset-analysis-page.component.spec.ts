import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAnalysisPageComponent } from './asset-analysis-page.component';

describe('AssetAnalysisPageComponent', () => {
  let component: AssetAnalysisPageComponent;
  let fixture: ComponentFixture<AssetAnalysisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetAnalysisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetAnalysisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
