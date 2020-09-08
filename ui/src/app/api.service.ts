import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toTTelevision, TTelevision } from './api.service.model.types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_BASE_URL = "http://localhost:5000";
  private SERVER_API_URI = "/api/v1";
  private POST_TV_KEY_ENDPOINT = "/tv/samsung/events/new";
  private POST_NEW_DEVICE_ENDPOINT = "/devices/new";
  private GET_DEVICES_ENDPOINT = "/devices";
  private GET_DEVICE_BY_ID_ENDPOINT = "/devices";
  private UPDATE_DEVICE_ENDPOINT = "/devices";
  private DELETE_DEVICE_BY_ID_ENDPOINT = "/devices";


  constructor(private httpClient: HttpClient) { }





	public getAllDevices(): Promise<TTelevision[]>{  
    return new Promise((resolve, reject) => {
      try{
        this.httpClient.get(`${this.SERVER_BASE_URL}${this.SERVER_API_URI}${this.GET_DEVICES_ENDPOINT}`).subscribe((data: any) => {
          console.log(data); 
          let devices: TTelevision[] = (data as any[]).map(item => toTTelevision(item))
          resolve(devices)
        })
      }
      catch(err){
        reject(err)
      }
    }) 
  } 
	public getDeviceByID(deviceID: string): Promise<TTelevision> {  
    return new Promise((resolve, reject) => {
      try{
        this.httpClient.get(`${this.SERVER_BASE_URL}${this.SERVER_API_URI}${this.GET_DEVICE_BY_ID_ENDPOINT}\\${deviceID}`).subscribe((data: any) => {
          console.log(data); 
          let device: TTelevision = toTTelevision(data)
          resolve(device)
        })
      }
      catch(err){
        reject(err)
      }
    }) 
  } 



	public postKey(keyCode: string, delay = 0){  
		return this.httpClient.post(
      `${this.SERVER_BASE_URL}${this.SERVER_API_URI}${this.POST_TV_KEY_ENDPOINT}`, {
        "key": keyCode,
        "delay": delay 
      },{ headers: { "Content-Type": "application/json" } }
    );  
  }  
	public postNewDevice(deviceObj: any){  
    const device: TTelevision = toTTelevision(deviceObj)
		return this.httpClient.post(
      `${this.SERVER_BASE_URL}${this.SERVER_API_URI}${this.POST_NEW_DEVICE_ENDPOINT}`, {
        "device": device
      },{ headers: { "Content-Type": "application/json" } }
    );  
  } 


  public updateDevice(deviceObj: any){  
    const device: TTelevision = toTTelevision(deviceObj)
		return this.httpClient.put(
      `${this.SERVER_BASE_URL}${this.SERVER_API_URI}${this.UPDATE_DEVICE_ENDPOINT}`, {
        "device": device
      },{ headers: { "Content-Type": "application/json" } }
    );  
  } 




  public deleteDeviceByID(deviceID: string){  
		return this.httpClient.delete(`${this.SERVER_BASE_URL}${this.SERVER_API_URI}${this.DELETE_DEVICE_BY_ID_ENDPOINT}\\${deviceID}`);  
  } 
}
