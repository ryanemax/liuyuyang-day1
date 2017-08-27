import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCourseInfoComponent } from './training-course-info.component';

describe('TrainingCourseInfoComponent', () => {
  let component: TrainingCourseInfoComponent;
  let fixture: ComponentFixture<TrainingCourseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCourseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCourseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
