import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../places.services';
import { Subscription} from 'rxjs';
import { WeatherRoute } from '../weatherRoute.model';
import { Map } from '../map.model';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-map-create',
  templateUrl: './map-create.component.html',
  styleUrls: ['./map-create.component.css']
})

export class MapCreateComponent implements OnInit, OnDestroy {
  latitude = 51.678418;
  longitude = 7.809007;

  markers: any;
  origin = { lat: 51.678418, lng: 7.809007 };
  destination = { lat: 51.678418, lng: 7.809007 };
  mapPlaces: WeatherRoute;
  wayPoints: Map[] = [];
  private placessSub: Subscription;

  constructor(public placesService: PlacesService) {}

  async ngOnInit() {
    // this.placesService.getPlaces();
    this.placessSub = this.placesService.getPlaceUpdateListner()
      .subscribe((places: WeatherRoute) => {
        console.log('Here I am');
        // console.log(places);
        this.mapPlaces = places;
        this.origin = { lat: this.mapPlaces.src.lat, lng: this.mapPlaces.src.lng };
        this.destination = { lat: this.mapPlaces.dest.lat, lng: this.mapPlaces.dest.lng };
        this.wayPoints = this.mapPlaces.wayPoints;
      });
  }

  ngOnDestroy() {
    this.placessSub.unsubscribe();
  }

}

