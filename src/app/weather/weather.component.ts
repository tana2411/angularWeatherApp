import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
  providers: [WeatherService]
})

export class WeatherComponent {
weatherData: any;

  constructor(private weatherService: WeatherService) {}
  
  async showWeather() {
    let cityname = (<HTMLInputElement>document.getElementById("cityInput")).value;
    try {
      this.weatherData = await this.weatherService.getWeatherData(cityname);
      console.log('weatherData:', this.weatherData);
    } catch (error) {
      console.error(error);
    }
  }
}
