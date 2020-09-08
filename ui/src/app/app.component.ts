import { Component } from '@angular/core';
import { TLinkData } from './nav-link/nav-link.type'
import { TButtonControlData } from './button-control/button-control.type';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  
  constructor() { }
  ngOnInit(): void {
  }
}
