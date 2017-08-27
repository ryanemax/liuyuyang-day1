import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhangyuExamPageComponent } from './zhangyu-exam-page.component';

describe('ZhangyuExamPageComponent', () => {
  let component: ZhangyuExamPageComponent;
  let fixture: ComponentFixture<ZhangyuExamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhangyuExamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhangyuExamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
