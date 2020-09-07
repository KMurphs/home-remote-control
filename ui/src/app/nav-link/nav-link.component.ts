import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TLinkData } from './nav-link.type'


@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent implements OnInit {

  @Input() linkData: TLinkData
  @Input() isActive: boolean
  @Output() navSelectionEvt = new EventEmitter();

  handleNavSelectionEvt(){
    this.navSelectionEvt.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
