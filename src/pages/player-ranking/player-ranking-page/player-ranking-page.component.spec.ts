import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRankingPageComponent } from './player-ranking-page.component';

describe('PlayerRankingPageComponent', () => {
  let component: PlayerRankingPageComponent;
  let fixture: ComponentFixture<PlayerRankingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRankingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRankingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
