import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericControlsComponent } from './numeric-controls.component';

describe('NumericControlsComponent', () => {
  let component: NumericControlsComponent;
  let fixture: ComponentFixture<NumericControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
