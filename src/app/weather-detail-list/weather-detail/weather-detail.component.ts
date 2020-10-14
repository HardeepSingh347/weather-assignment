import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit, OnDestroy {
  weatherSubscription: Subscription;

  // inpput to get city name from the parent component
  @Input() city: string;

  cityWeatherDetails: any;
  imgSrc: string;

  // service dependency injected
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // subscribe to service method to get city weather details
    this.weatherSubscription = this.weatherService.getCityWeatherDetails(this.city).subscribe(data => {
      if (data) {
        this.cityWeatherDetails = data;

        // generating image src
        this.imgSrc = `http://openweathermap.org/img/wn/${this.cityWeatherDetails?.weather[0]?.icon}@4x.png`;
      }
    });
  }

  ngOnDestroy = () => {
    // unsubscribe to avoid any memory leak issues
    if(this.weatherSubscription) {
      this.weatherSubscription.unsubscribe();
    }
  }

}
