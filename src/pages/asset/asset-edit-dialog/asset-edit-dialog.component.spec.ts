import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetEditDialogComponent } from './asset-edit-dialog.component';

describe('AssetEditDialogComponent', () => {
  let component: AssetEditDialogComponent;
  let fixture: ComponentFixture<AssetEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
