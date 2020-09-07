import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TButtonControlData } from './button-control.type';

@Component({
  selector: 'app-button-control-basic',
  templateUrl: './button-control-basic.component.html',
  styleUrls: ['./button-control.component.css']
})
export class ButtonControlBasicComponent implements OnInit {

  @Input() buttonData: TButtonControlData
  @Output() onClickEvt = new EventEmitter();
  scaleStyle: string 

  constructor() { }

  ngOnInit(): void {
    this.scaleStyle = `transform: scale(${this.buttonData.scaleFactor})`
  }

}
