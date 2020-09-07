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
  activeLink = 2;

  // https://material.io/resources/icons/?search=import&style=baseline
  links: TLinkData[] = [
    { link: "#config", iconName: "settings", iconText: "Configuration", ariaLabel: "Configure Remote", ariaHidden: false },
    { link: "#management", iconName: "menu", iconText: "Management Controls", ariaLabel: "Managament Controls", ariaHidden: false },
    { link: "#main", iconName: "control_camera", iconText: "Main Controls", ariaLabel: "Main Controls", ariaHidden: false },
    { link: "#vol-chan", iconName: "import_export", iconText: "Volume & Channel", ariaLabel: "Volume & Channel", ariaHidden: false },
    { link: "#numbers", iconName: "dialpad", iconText: "Numeric Controls", ariaLabel: "Numeric Controls", ariaHidden: false },
    { link: "#colors", iconName: "palette", iconText: "Colored Controls", ariaLabel: "Colored Controls", ariaHidden: false }
  ]
  setActiveLink(index: number){
    this.activeLink = index;
  }




  
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.activeLink = 2
  }
}
