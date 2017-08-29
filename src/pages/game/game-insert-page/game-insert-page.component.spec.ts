import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInsertPageComponent } from './game-insert-page.component';

describe('GameInsertPageComponent', () => {
  let component: GameInsertPageComponent;
  let fixture: ComponentFixture<GameInsertPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameInsertPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInsertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
