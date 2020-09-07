import { Component } from '@angular/core';
import { TLinkData } from './nav-link/nav-link.type'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  links: TLinkData[] = [
    { link: "/section--config", iconName: "settings", iconText: "Configuration", ariaLabel: "Configure Remote", ariaHidden: false },
    { link: "/section--management", iconName: "menu", iconText: "Management Controls", ariaLabel: "Managament Controls", ariaHidden: false },
    { link: "/section--main", iconName: "control_camera", iconText: "Main Controls", ariaLabel: "Main Controls", ariaHidden: false },
    { link: "/section--vol-chan", iconName: "import_export", iconText: "Volume & Channel", ariaLabel: "Volume & Channel", ariaHidden: false },
    { link: "/section--numbers", iconName: "dialpad", iconText: "Numeric Controls", ariaLabel: "Numeric Controls", ariaHidden: false },
    { link: "/section--colors", iconName: "palette", iconText: "Colored Controls", ariaLabel: "Colored Controls", ariaHidden: false }
  ]
}
