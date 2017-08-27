import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerListPageComponent } from './trainer-list-page.component';

describe('TrainerListPageComponent', () => {
  let component: TrainerListPageComponent;
  let fixture: ComponentFixture<TrainerListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
