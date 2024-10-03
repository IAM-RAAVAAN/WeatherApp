import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { environmentVariables } from '../app.config';
import { WeatherData } from '../modules/weather.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient ) {
    
  }

  getWeatherData(cityName: string): Observable<WeatherData> {
   return this.http.get<WeatherData>(environmentVariables.weatherAPIURL,{
      headers: new HttpHeaders().set(environmentVariables.xRapidapiHost,environmentVariables.xRapidapiHostVal)
      .set(environmentVariables.xRapidapiKey,environmentVariables.xRapidapiKeyVal),
      params: new HttpParams().set("q",cityName)

    }).pipe(
      tap(data => {
        console.log('Weather data received:', data); // Log the received data
      })
      );
  }
}


