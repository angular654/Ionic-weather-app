import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public city = "Rostov"
  public isLoad = false
  public loading = false
  public info: any 

  constructor(private weather: WeatherService) {}
  ngAfterViewInit() {
    this.getInfo()
  }
    async getInfo() {
      this.loading = true
    await this.weather.getWeatherNow(this.city).then(res => {
        console.log(res),
        this.info = res,
        this.loading = false
        this.isLoad= true})
    }
}
