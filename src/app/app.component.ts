import { Component } from '@angular/core';
import { WeatherComponent } from './components/weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent],
  template: `<app-weather></app-weather>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApp.UI';
}
