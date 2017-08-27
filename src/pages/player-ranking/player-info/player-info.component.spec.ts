import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoPageComponent } from './player-info-page.component';

describe('PlayerInfoPageComponent', () => {
  let component: PlayerInfoPageComponent;
  let fixture: ComponentFixture<PlayerInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
