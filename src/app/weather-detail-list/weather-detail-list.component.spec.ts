import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailListComponent } from './weather-detail-list.component';

describe('WeatherDetailListComponent', () => {
  let component: WeatherDetailListComponent;
  let fixture: ComponentFixture<WeatherDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
