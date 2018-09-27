import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatCardModule, MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PlaceCreateComponent } from './places/place-create/place-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
