import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbookEditComponent } from './cookbook-edit.component';

describe('CookbookEditComponent', () => {
  let component: CookbookEditComponent;
  let fixture: ComponentFixture<CookbookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookbookEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookbookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
