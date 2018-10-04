import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlacesService } from '../places.services';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html',
  styleUrls: ['./place-create.component.css']
})
export class PlaceCreateComponent {
  constructor(public placesService: PlacesService) {}

  onGetRoute(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.placesService.inputPlace(form.value.source, form.value.destination);
    form.resetForm();
  }
}
