import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-input-field-text',
  templateUrl: './input-field-text.component.html',
  styleUrls: ['./input-field-text.component.css']
})
export class InputFieldTextComponent implements OnInit {

  @Input() value: string;
  @Input() extraClasses: string;
  @Input() disabled: boolean;
  @Input() placeholder: string;
  @Output() handleValueChangeEvt = new EventEmitter();

  cssClasses: string = "custom-input align-self-stretch flex flex-column"


  constructor() { }
  

  ngOnInit(): void {
    this.cssClasses = `${this.cssClasses} ${this.extraClasses}`
  }

}
