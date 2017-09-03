import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbookAnalysisComponent } from './cookbook-analysis.component';

describe('CookbookAnalysisComponent', () => {
  let component: CookbookAnalysisComponent;
  let fixture: ComponentFixture<CookbookAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookbookAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookbookAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
