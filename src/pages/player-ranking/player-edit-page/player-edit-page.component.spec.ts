import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEditPageComponent } from './player-edit-page.component';

describe('PlayerEditPageComponent', () => {
  let component: PlayerEditPageComponent;
  let fixture: ComponentFixture<PlayerEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
