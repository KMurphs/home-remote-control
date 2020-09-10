import { Component, OnInit, Input } from '@angular/core';
import { TButtonControlData } from '../button-control/button-control.type';
import { ApiService } from '../api.service';
import { buttonsData } from './remote-controls.utils';

@Component({
  selector: 'app-colored-controls',
  templateUrl: './remote-controls.component.html',
  styleUrls: ['./remote-controls.component.css']
})
export class ColoredControlsComponent implements OnInit {

  @Input() devID: string;
  delay: number = buttonsData.defaultDelayOnKeyPress
  buttons: TButtonControlData[] = buttonsData.coloredButtons
  
  constructor(private apiService: ApiService) { 
  }

  ngOnInit(): void {
  }

  handleKeyPress(keyCode: string){
    console.log("Sending key: '", keyCode, "' - delay: ", this.delay, " - to device: ", this.devID)
    this.apiService.postKey(this.devID, keyCode, this.delay).subscribe((data: any) => {
      console.log(data); 
    })
  }

}
