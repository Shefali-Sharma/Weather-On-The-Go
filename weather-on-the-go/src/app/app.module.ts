import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppComponent } from './app.component';
import { PlaceCreateComponent } from './places/place-create/place-create.component';
import { MapCreateComponent } from './places/map-create/map-create.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceCreateComponent,
    MapCreateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB09T0-SCd3IMwYWmxOiqknt-7iw2m0wbY'
    }),
    AgmDirectionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
