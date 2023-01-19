import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http: HttpClient) {}

  getWheaterData(cityname: string, countryname: string){
    const uri: string = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}, ${countryname}&cnt=5&appid=a8d56ad88b9efcd3f6da2a86517746ed`
    return this.http.get(uri)
  }
}
