import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAddPageComponent } from './asset-add-page.component';

describe('AssetAddPageComponent', () => {
  let component: AssetAddPageComponent;
  let fixture: ComponentFixture<AssetAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
