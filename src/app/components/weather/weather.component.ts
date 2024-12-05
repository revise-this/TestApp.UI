import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.component.html', 
  styleUrls: ['./weather.component.css']  
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
