import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = "http://localhost:5000/api/v1/tv/samsung/events/new";

  constructor(private httpClient: HttpClient) { }
	public postKey(keyCode: string, delay = 0){  
		return this.httpClient.post(
      this.SERVER_URL, 
      {
        "key": keyCode,
        "delay": delay 
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );  
	}  
}
