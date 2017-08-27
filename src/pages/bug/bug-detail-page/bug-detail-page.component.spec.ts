import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugDetailPageComponent } from './bug-detail-page.component';

describe('BugDetailPageComponent', () => {
  let component: BugDetailPageComponent;
  let fixture: ComponentFixture<BugDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
