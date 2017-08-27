import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbookItemComponent } from './cookbook-item.component';

describe('CookbookItemComponent', () => {
  let component: CookbookItemComponent;
  let fixture: ComponentFixture<CookbookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookbookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookbookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
