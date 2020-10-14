import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getCityWeatherDetails = (cityName : string): any => {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=db07828e9204966565c71d9b41fb786e`);
  }
}
