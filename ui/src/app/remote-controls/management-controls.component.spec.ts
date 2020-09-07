import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementControlsComponent } from './management-controls.component';

describe('ManagementControlsComponent', () => {
  let component: ManagementControlsComponent;
  let fixture: ComponentFixture<ManagementControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
