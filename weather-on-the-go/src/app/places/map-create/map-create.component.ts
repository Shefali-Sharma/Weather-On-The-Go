import { Component } from '@angular/core';

@Component({
  selector: 'app-map-create',
  templateUrl: './map-create.component.html',
  styleUrls: ['./map-create.component.css']
})

export class MapCreateComponent {
  latitude = 51.678418;
  longitude = 7.809007;
  // locationChosen = false;
  origin: any;
  destination: any;
  onChooseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    // this.locationChosen = true;
    this.origin = { lat: 24.799448, lng: 120.979021 };
    this.destination = { lat: 24.799524, lng: 120.975017 };
  }
}

