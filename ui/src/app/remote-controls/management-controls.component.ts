import { Component, OnInit } from '@angular/core';
import { TButtonControlData } from '../button-control/button-control.type';
import { ApiService } from '../api.service';
import { buttonsData } from './remote-controls.utils';

@Component({
  selector: 'app-management-controls',
  templateUrl: './remote-controls.component.html',
  styleUrls: ['./remote-controls.component.css']
})
export class ManagementControlsComponent implements OnInit {

  delay: number = buttonsData.defaultDelayOnKeyPress
  buttons: TButtonControlData[] = buttonsData.managementButtons
  
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
