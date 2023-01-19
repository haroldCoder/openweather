import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from './services/weather.service';
import 'bootstrap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  data: any = '';
  city: string = '';
  country: string = '';
  constructor(private weatherService: WeatherService){
  }
  ngOnInit(): void {}
  setCity(event: any): void{
    this.city = event.target.value;
  }
  setCountry(event: any): void{
    this.country = event.target.value;
  }
  getWheather(): void{
    if(this.city != ''){
      this.weatherService.getWheaterData(this.city, this.country).subscribe(res=>console.log(this.data = res))
    }
    else
      alert("Please, Insert some values")
  }
  title = 'open-weather';
}
