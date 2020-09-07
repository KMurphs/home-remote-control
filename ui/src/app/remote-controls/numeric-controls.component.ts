import { Component, OnInit } from '@angular/core';
import { buttonsData } from './remote-controls.utils'
import { ApiService } from '../api.service';
import { TButtonControlData } from '../button-control/button-control.type';


@Component({
  selector: 'app-numeric-controls',
  templateUrl: './remote-controls.component.html',
  styleUrls: ['./remote-controls.component.css']
})
export class NumericControlsComponent implements OnInit {

  delay: number = buttonsData.defaultDelayOnKeyPress
  buttons: TButtonControlData[] = buttonsData.numericButtons
  
  constructor(private apiService: ApiService) { 
  }

  ngOnInit(): void {
  }

  handleKeyPress(keyCode: string){
    console.log("Sending key: '", keyCode, "' - delay: ", this.delay)
    this.apiService.postKey(keyCode, this.delay).subscribe((data: any) => {
      console.log(data); 
    })
  }

}
