import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public city = "Rostov"
  public days:Number = 3
  public info:any = []
  constructor(private weather:WeatherService) {}
  ngAfterViewInit(){
    this.getInfo(this.days)
  }
  getInfo(days:Number) {
    this.weather.getWeatherForecast(this.city,days,"no").then((res:any) =>{
      this.info = res.forecast.forecastday
      console.log(this.info)
   })
  }
}
