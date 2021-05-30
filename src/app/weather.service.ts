import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiKey = 'a28a6f14dee34ead8e365704212905'
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://api.openweathermap.org',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS'
    })
  };

  constructor( private http:HttpClient) { }

   getWeatherNow(city:string) {
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}&aqi=no`,this.httpOptions)
  }
  getWeatherForecast(city:string,days:Number,aqi:string) {
    return this.http.get(`http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=${days}&aqi=${aqi}&alerts=yes`,this.httpOptions)
  }
}
