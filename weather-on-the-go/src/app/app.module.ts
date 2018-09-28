import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatCardModule, MatButtonModule} from '@angular/material';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { PlaceCreateComponent } from './places/place-create/place-create.component';
import { MapCreateComponent } from './places/map-create/map-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceCreateComponent,
    MapCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    AgmCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
