import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WeatherDetailListComponent } from './weather-detail-list/weather-detail-list.component';


const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "dashboard",
    component: WeatherDetailListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
