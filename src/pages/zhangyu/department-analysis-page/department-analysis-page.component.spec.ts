import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAnalysisPageComponent } from './department-analysis-page.component';

describe('DepartmentAnalysisPageComponent', () => {
  let component: DepartmentAnalysisPageComponent;
  let fixture: ComponentFixture<DepartmentAnalysisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentAnalysisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAnalysisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
