import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastMailAnalysisComponent } from './fast-mail-analysis.component';

describe('FastMailAnalysisComponent', () => {
  let component: FastMailAnalysisComponent;
  let fixture: ComponentFixture<FastMailAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastMailAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastMailAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
