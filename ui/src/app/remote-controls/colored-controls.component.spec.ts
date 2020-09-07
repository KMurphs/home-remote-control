import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredControlsComponent } from './colored-controls.component';

describe('ColoredControlsComponent', () => {
  let component: ColoredControlsComponent;
  let fixture: ComponentFixture<ColoredControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoredControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
