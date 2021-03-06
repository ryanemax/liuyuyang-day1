import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDetailPageComponent } from './asset-detail-page.component';

describe('AssetDetailPageComponent', () => {
  let component: AssetDetailPageComponent;
  let fixture: ComponentFixture<AssetDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
