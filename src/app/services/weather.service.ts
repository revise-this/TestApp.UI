import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'YOUR_API_KEY';

  getWeather(city: string) {
    return axios.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`);
  }
}
