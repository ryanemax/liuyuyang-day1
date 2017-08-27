import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugListPageComponent } from './bug-list-page.component';

describe('BugListPageComponent', () => {
  let component: BugListPageComponent;
  let fixture: ComponentFixture<BugListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
