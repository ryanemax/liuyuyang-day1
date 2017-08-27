import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieManagePageComponent } from './movie-manage-page.component';

describe('MovieManagePageComponent', () => {
  let component: MovieManagePageComponent;
  let fixture: ComponentFixture<MovieManagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieManagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
