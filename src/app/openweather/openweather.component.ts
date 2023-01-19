import { Component, Input, OnInit } from '@angular/core';
declare global {
  interface Date {
      addDays(): Number
  }
}
@Component({
  selector: 'app-openweather',
  templateUrl: './openweather.component.html',
  styleUrls: ['./openweather.component.scss']
})


export class OpenweatherComponent implements OnInit {
  @Input() data: any
  dates: any = []
  constructor(){
    
  }
  
  ngOnInit(): void {
      function addDays(date: any, days: number): Date {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result
      }
      var date = new Date()
      for(let i = 0; i<5; i++){
       this.dates.push(addDays(date, i)); 
      }
      
  }
}
