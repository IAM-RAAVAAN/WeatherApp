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
  
  selectedUnits: { temp: 'C' | 'F'; wind: 'kph' | 'mph'; distance: 'km' | 'm' } = {
    temp: 'C',    // Temperature in Celsius by default
    wind: 'kph',  // Wind in kilometers per hour by default
    distance: 'km' // Visibility in kilometers by default
  };

  cityName: string = 'Seattle'
  weatherData?: WeatherData
  ngOnInit(): void {
    console.log('ngOnInit called');
    this.getWeatherData(this.cityName);
    this.cityName = ""
    
  }

  onSubmit(): void {
      console.log('Form submitted with city:', this.cityName);
      this.getWeatherData(this.cityName);
      this.cityName = "";

  }

   toggleUnits(temp: 'C' | 'F', wind: 'kph' | 'mph', distance: 'km' | 'm'): void {
    this.selectedUnits = { temp, wind, distance };
  }

  private getWeatherData(cityName:string){
      this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (responce: any) =>{
        this.weatherData = responce;
        console.log(responce,cityName)
      }
  });
  }

}
