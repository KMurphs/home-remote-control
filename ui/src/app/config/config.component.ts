import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  fetchDevices(keyCode: string){
    // this.apiService.postKey(keyCode, this.delay).subscribe((data: any) => {
    //   console.log(data); 
    // })
  }

}
