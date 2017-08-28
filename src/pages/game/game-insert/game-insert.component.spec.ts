import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInsertComponent } from './game-insert.component';

describe('GameInsertComponent', () => {
  let component: GameInsertComponent;
  let fixture: ComponentFixture<GameInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
