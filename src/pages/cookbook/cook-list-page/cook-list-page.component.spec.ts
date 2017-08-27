import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookListPageComponent } from './cook-list-page.component';

describe('CookListPageComponent', () => {
  let component: CookListPageComponent;
  let fixture: ComponentFixture<CookListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
