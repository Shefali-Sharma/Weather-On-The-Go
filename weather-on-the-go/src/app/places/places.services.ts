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
  private src: number;
  constructor(private http: HttpClient) {}

  // getPlaces() {
  //   this.http.get<{message: string, wayPoints: Map[], src: Map, dest: Map}>('http://localhost:4006/api/startEnd')
  //     .subscribe((mapPlaceData) => {
  //       this.mapWeatherRoute.src = mapPlaceData.src;
  //       this.mapWeatherRoute.dest = mapPlaceData.dest;
  //       this.mapWeatherRoute.wayPoints = mapPlaceData.wayPoints;
  //       this.mapWeatherRouteUpdated.next(this.mapWeatherRoute);
  //       console.log(this.mapWeatherRoute);
  //     });
  // }

  getPlaceUpdateListner() {
    return this.mapWeatherRouteUpdated.asObservable();
  }

  inputPlace(source: string, destination: string) {
    const place: Place = {source: source, destination: destination};
    this.http.post<{src: Map, dest: Map, wayPoints: Map[]}>('http://localhost:4006/api/startEnd', place)
      .subscribe((responseData) => {
        console.log(responseData);
        // this.src = responseData.src['lat'];
        // console.log(this.src);
        // this.mapWeatherRoute.dest.lat = 30.6;
        // this.mapWeatherRoute['src']['lat'] = responseData.src['lat'];
        // this.mapWeatherRoute.src.lng = responseData.src['lng'];
        // this.mapWeatherRoute.src.temp = responseData.src['temp'].toString();
        // this.mapWeatherRoute.dest.lat = responseData.dest.lat;
        // this.mapWeatherRoute.dest.lng = responseData.dest.lng;
        // this.mapWeatherRoute.dest.temp = responseData.dest.temp.toString();
        // this.mapWeatherRoute.wayPoints = responseData.wayPoints;
        this.mapWeatherRouteUpdated.next(responseData);
      });
  }
}
