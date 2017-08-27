import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetEditPageComponent } from './asset-edit-page.component';

describe('AssetEditPageComponent', () => {
  let component: AssetEditPageComponent;
  let fixture: ComponentFixture<AssetEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
