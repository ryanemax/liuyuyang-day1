import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCourseItemComponent } from './training-course-item.component';

describe('TrainingCourseItemComponent', () => {
  let component: TrainingCourseItemComponent;
  let fixture: ComponentFixture<TrainingCourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
