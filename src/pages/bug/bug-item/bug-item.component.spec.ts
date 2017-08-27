import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugItemComponent } from './bug-item.component';

describe('BugItemComponent', () => {
  let component: BugItemComponent;
  let fixture: ComponentFixture<BugItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
