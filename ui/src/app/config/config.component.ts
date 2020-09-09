import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TTelevision } from '../api.service.model.types';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  devices: TTelevision[] = []
  selected: string

  ngOnInit(): void {
    this.fetchDevices().then(res => console.log(this.devices))
  }

  fetchDevices(){
    return new Promise((resolve, reject) => {
      this.apiService.getAllDevices()
      .then(devs => { this.devices = [...devs]; resolve('success'); })
      .catch(err => reject(err))
    })
  }


}
