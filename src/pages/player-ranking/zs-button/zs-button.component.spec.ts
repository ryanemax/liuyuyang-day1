import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZsButtonComponent } from './zs-button.component';

describe('ZsButtonComponent', () => {
  let component: ZsButtonComponent;
  let fixture: ComponentFixture<ZsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
