import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmjPageComponent } from './pmj-page.component';

describe('PmjPageComponent', () => {
  let component: PmjPageComponent;
  let fixture: ComponentFixture<PmjPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmjPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmjPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
