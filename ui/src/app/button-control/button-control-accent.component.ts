import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TButtonControlData } from './button-control.type';

@Component({
  selector: 'app-button-control-accent',
  templateUrl: './button-control-accent.component.html',
  styleUrls: ['./button-control.component.css']
})
export class ButtonControlAccentComponent implements OnInit {

  @Input() buttonData: TButtonControlData
  @Output() onClickEvt = new EventEmitter();
  scaleStyle: string 

  constructor() { }

  ngOnInit(): void {
    this.scaleStyle = `transform: scale(${this.buttonData.scaleFactor})`
  }

}
