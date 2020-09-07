import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TButtonControlData } from './button-control.type';

@Component({
  selector: 'app-button-control',
  templateUrl: './button-control.component.html',
  styleUrls: ['./button-control.component.css']
})
export class ButtonControlComponent implements OnInit {

  @Input() buttonData: TButtonControlData
  @Output() onClickEvt = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
