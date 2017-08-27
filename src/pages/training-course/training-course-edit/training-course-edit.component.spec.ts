import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCourseEditComponent } from './training-course-edit.component';

describe('TrainingCourseEditComponent', () => {
  let component: TrainingCourseEditComponent;
  let fixture: ComponentFixture<TrainingCourseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCourseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCourseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
