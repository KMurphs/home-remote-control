import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TTelevision, TTelevisionConfig, TTelevisionDetails } from '../api.service.model.types';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  devices: TTelevision[] = []
  families: string[]
  classes: string[]
  deviceOnDisplay: TTelevision 
  isCreatingDevice: boolean = false;// || true;

  ngOnInit(): void {
    this.resetDeviceOnDisplay()
    this.fetchDevices().then(res => {
      // this.deviceOnDisplay = this.devices[0]
    })
    this.fetchClasses().then(res => {
      // this.deviceOnDisplay = this.devices[0]
    })
  }


  resetDeviceOnDisplay(){
    this.deviceOnDisplay = ({} as TTelevision)
    this.deviceOnDisplay.friendly_name = ''
    this.deviceOnDisplay.id = ''
    this.deviceOnDisplay.configuration = ({} as TTelevisionConfig)
    this.deviceOnDisplay.configuration.ip = ""
    this.deviceOnDisplay.configuration.port = 0
    this.deviceOnDisplay.details = ({} as TTelevisionDetails)
    this.deviceOnDisplay.roles = []
  }


  fetchDevices(){
    return new Promise((resolve, reject) => {
      this.apiService.getAllDevices()
      .then(devs => { this.devices = [...devs]; resolve('success'); })
      .catch(err => reject(err))
    })
  }
  fetchClasses(){
    return new Promise((resolve, reject) => {
      this.apiService.getSupportedDeviceClasses()
      .then(classes => { this.classes = [...classes]; resolve('success'); })
      .catch(err => reject(err))
    })
  }
  fetchFamilies(devClass: string){
    return new Promise((resolve, reject) => {
      this.apiService.getSupportedFamiliesForClass(devClass)
      .then(families => { this.families = [...families]; resolve('success'); })
      .catch(err => reject(err))
    })
  }






  handleNewDevice(){
    console.log("Creating New Device")
    this.isCreatingDevice = true
    this.resetDeviceOnDisplay()
  }
  handleCreation(){
    console.log("Creating Device")
    this.isCreatingDevice = false
    this.apiService.postNewDevice(this.deviceOnDisplay).subscribe(data => {
      console.log(data)
      this.apiService.getAllDevices()
    })
  }

  handleDifferentDevice(devID){
    console.log("Selecting Different Device")
    if(!devID){
      this.resetDeviceOnDisplay()
    }
    let oldClass = this.deviceOnDisplay.configuration.family
    this.devices.forEach((dev, index, devs) => (dev.id == devID) && (this.deviceOnDisplay = {...devs[index]}))
    if(oldClass != this.deviceOnDisplay.configuration.class){
      this.handleDifferentClass(this.deviceOnDisplay.configuration.class)
    }
    console.log(this.deviceOnDisplay)
  }
  handleDifferentClass(devClass){
    console.log(`Retrieving device families for class '${devClass}'`)
    this.fetchFamilies(devClass).then(fams => console.log(devClass, fams))
  }
  handleDifferentFamily(devFamily){
    // console.log(`Retrieving device families for class '${devClass}'`)
    // this.apiService.getSupportedFamiliesForClass(devClass).then(families => this.families = [...families])
  }


  handleUpdate(){
    console.log("Updating Device")
    console.log(this.deviceOnDisplay)
    this.apiService.updateDevice(this.deviceOnDisplay).subscribe(data => {
      console.log(data)
      this.fetchDevices()
    })
  }
  handleDelete(){
    console.log("Deleting Device")
    this.apiService.deleteDeviceByID(this.deviceOnDisplay.id).subscribe(data => {
      console.log(data)
      this.fetchDevices().then(res => this.deviceOnDisplay = { ...this.devices[0] })
    })
  }




  handleFriendlyName(){
    console.log(this.deviceOnDisplay)
  }
}
