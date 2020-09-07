import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsVolumeControlsComponent } from './channels-volume-controls.component';

describe('ChannelsVolumeControlsComponent', () => {
  let component: ChannelsVolumeControlsComponent;
  let fixture: ComponentFixture<ChannelsVolumeControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelsVolumeControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsVolumeControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
