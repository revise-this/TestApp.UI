import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="city" placeholder="Enter city" />
    <button (click)="fetchWeather()">Get Weather</button>
    <div *ngIf="weather">
      <h3>Weather in {{ city }}</h3>
      <p>Temperature: {{ weather.main.temp }}°C</p>
      <p>Condition: {{ weather.weather[0].description }}</p>
    </div>
  `
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void { }

  fetchWeather() {
    console.log('fetchWeather() called'); // Debug log
    this.weatherService.getWeather(this.city).then((response: { data: any; }) => {
      this.weather = response.data;
      console.log('Weather data:', this.weather); // Debug log
    }).catch(err => console.error('Error fetching weather:', err));
  }
}
