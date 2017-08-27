import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListPageComponent } from './game-list-page.component';

describe('GameListPageComponent', () => {
  let component: GameListPageComponent;
  let fixture: ComponentFixture<GameListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
