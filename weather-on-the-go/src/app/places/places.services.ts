import { Place } from './place.model';
import { Map } from './map.model';
import { WeatherRoute } from './weatherRoute.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class PlacesService {
  private mapWeatherRoute: WeatherRoute;
  private mapWeatherRouteUpdated = new Subject<WeatherRoute>();

  constructor(private http: HttpClient) {}

  getPlaces() {
    this.http.get<{message: string, wayPoints: Map[], src: Map, dest: Map}>('http://localhost:4001/api/posts')
      .subscribe((mapPlaceData) => {
        this.mapWeatherRoute.src = mapPlaceData.src;
        this.mapWeatherRoute.dest = mapPlaceData.dest;
        this.mapWeatherRoute.wayPoints = mapPlaceData.wayPoints;
        this.mapWeatherRouteUpdated.next(this.mapWeatherRoute);
      });
  }

  getPlaceUpdateListner() {
    return this.mapWeatherRouteUpdated.asObservable();
  }

  inputPlace(source: string, destination: string) {
    const post: Place = {source: source, destination: destination};
  }
}
