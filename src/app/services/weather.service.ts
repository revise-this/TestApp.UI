import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '78cffec94777fcf6fc9eb10a02cca72b';

  getWeather(city: string) {
    return axios.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=imperial`);
  }
}
