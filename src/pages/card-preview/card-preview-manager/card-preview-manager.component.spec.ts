import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPreviewManagerComponent } from './card-preview-manager.component';

describe('CardPreviewManagerComponent', () => {
  let component: CardPreviewManagerComponent;
  let fixture: ComponentFixture<CardPreviewManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPreviewManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPreviewManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
