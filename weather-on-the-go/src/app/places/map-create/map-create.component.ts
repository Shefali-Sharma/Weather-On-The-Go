import { Component } from '@angular/core';

@Component({
  selector: 'app-map-create',
  templateUrl: './map-create.component.html',
  styleUrls: ['./map-create.component.css']
})

export class MapCreateComponent {
  latitude = 51.678418;
  longitude = 7.809007;
  locationChosen = false;
  onChooseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }
}
