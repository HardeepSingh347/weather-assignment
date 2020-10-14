import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WeatherDetailListComponent } from './weather-detail-list/weather-detail-list.component';
import { WeatherDetailComponent } from './weather-detail-list/weather-detail/weather-detail.component';

import { MatExpansionModule } from "@angular/material/expansion"

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WeatherDetailListComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
