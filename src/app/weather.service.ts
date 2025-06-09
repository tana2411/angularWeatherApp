import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeatherData(city: string): Promise<any> {
    const apiKey = "3cede9c863f6e72c5a4a62e8b8cb0ac3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    return fetch(url).then(response => response.json());
  }
}
