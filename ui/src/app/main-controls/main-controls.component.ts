import { Component, OnInit } from '@angular/core';
import { TButtonControlData } from '../button-control/button-control.type';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main-controls',
  templateUrl: './main-controls.component.html',
  styleUrls: ['./main-controls.component.css']
})
export class MainControlsComponent implements OnInit {

  defaultDelayOnKeyPress = 0;

  // https://material.io/resources/icons/?search=import&style=baseline
  buttons: TButtonControlData[] = [
    { keyCode: "KEY_TOOLS", color: "", icon: "build", text: "Tool", ariaLabel: "Tools Key", ariaHidden: false, scaleFactor: 1 },
    { keyCode: "KEY_VOLUP", color: "accent", icon: "arrow_drop_up", text: "Up", ariaLabel: "Up Key", ariaHidden: false, scaleFactor: 2.5 },
    { keyCode: "KEY_INFO", color: "", icon: "info", text: "Info", ariaLabel: "Info Key", ariaHidden: false, scaleFactor: 1 },

    { keyCode: "KEY_LEFT", color: "accent", icon: "arrow_left", text: "Left", ariaLabel: "Left Key", ariaHidden: false, scaleFactor: 2.5 },
    { keyCode: "KEY_SOURCE", color: "primary", icon: "list", text: "Source", ariaLabel: "Source Key", ariaHidden: false, scaleFactor: 1 },
    { keyCode: "KEY_RIGHT", color: "accent", icon: "arrow_right", text: "Right", ariaLabel: "Right Key", ariaHidden: false, scaleFactor: 2.5 },

    { keyCode: "KEY_RETURN", color: "", icon: "backspace", text: "Return", ariaLabel: "Return Key", ariaHidden: false, scaleFactor: 1 },
    { keyCode: "KEY_VOLDOWN", color: "accent", icon: "arrow_drop_down", text: "Down", ariaLabel: "Down Key", ariaHidden: false, scaleFactor: 2.5 },
    { keyCode: "KEY_RETURN", color: "", icon: "close", text: "Exit", ariaLabel: "Exit Key", ariaHidden: false, scaleFactor: 1 }
  ]

  constructor(private apiService: ApiService) { }
  // constructor() { }

  ngOnInit(): void {
  }

  handleKeyPress(keyCode: string){
    console.log("Sending key: '", keyCode, "' - delay: ", this.defaultDelayOnKeyPress)
    this.apiService.postKey(keyCode, this.defaultDelayOnKeyPress).subscribe((data: any) => {
      console.log(data); 
    })
  }

}
