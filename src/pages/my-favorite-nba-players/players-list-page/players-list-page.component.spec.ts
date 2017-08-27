import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersListPageComponent } from './players-list-page.component';

describe('PlayersListPageComponent', () => {
  let component: PlayersListPageComponent;
  let fixture: ComponentFixture<PlayersListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
