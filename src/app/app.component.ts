import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common'; // Import CommonModule
import { WeatherData } from './modules/weather.model';
import {WeatherService} from './services/weather.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private weatherService:WeatherService){}
  
  weatherData?: WeatherData
  ngOnInit(): void {
    this.weatherService.getWeatherData('Seattle')
    .subscribe({
      next: (responce: any) =>{
        this.weatherData = responce;
        console.log(responce)
      }
  });
  }

}
