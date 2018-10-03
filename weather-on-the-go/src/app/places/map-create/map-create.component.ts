import { Component, OnInit, OnDestroy } from '@angular/core';
import { Place } from '../place.model';
import { Map } from '../map.model';
import { PlacesService } from '../places.services';
import { Subscription} from 'rxjs';
import { WeatherRoute } from '../weatherRoute.model';

@Component({
  selector: 'app-map-create',
  templateUrl: './map-create.component.html',
  styleUrls: ['./map-create.component.css']
})

export class MapCreateComponent implements OnInit, OnDestroy {
  latitude = 51.678418;
  longitude = 7.809007;
  // locationChosen = false;
  origin: any;
  destination: any;
  mapPlaces: WeatherRoute;
  private placessSub: Subscription;

  constructor(public placesService: PlacesService) {}

  onChooseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    // this.locationChosen = true;
    this.origin = { lat: 24.799448, lng: 120.979021 };
    this.destination = { lat: 24.799524, lng: 120.975017 };
  }

  ngOnInit() {
    this.placesService.getPlaces();
    this.placessSub = this.placesService.getPlaceUpdateListner()
      .subscribe((places: WeatherRoute) => {
        this.mapPlaces = places;
      });
  }

  ngOnDestroy() {
    this.placessSub.unsubscribe();
  }

}

