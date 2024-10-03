import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common'; // Import CommonModule
import { WeatherData } from './modules/weather.model';
import {WeatherService} from './services/weather.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private weatherService:WeatherService){}
  
  cityName: string = 'Seattle'
  weatherData?: WeatherData
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit(): void {
      this.getWeatherData(this.cityName);
      this.cityName = "";

  }

  private getWeatherData(cityName:string){
      this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (responce: any) =>{
        this.weatherData = responce;
        console.log(responce)
      }
  });
  }

}
