import { Component, OnInit, Input } from '@angular/core';
import { buttonsData } from './remote-controls.utils'
import { ApiService } from '../api.service';
import { TButtonControlData } from '../button-control/button-control.type';


@Component({
  selector: 'app-numeric-controls',
  templateUrl: './remote-controls.component.html',
  styleUrls: ['./remote-controls.component.css']
})
export class NumericControlsComponent implements OnInit {

  @Input() devID: string;
  delay: number = buttonsData.defaultDelayOnKeyPress
  buttons: TButtonControlData[] = buttonsData.numericButtons
  
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
