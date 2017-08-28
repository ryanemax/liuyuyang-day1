import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameUpdatePageComponent } from './game-update-page.component';

describe('GameUpdatePageComponent', () => {
  let component: GameUpdatePageComponent;
  let fixture: ComponentFixture<GameUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
