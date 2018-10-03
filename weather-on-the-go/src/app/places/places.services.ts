import { Place } from './place.model';
import { Map } from './map.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class PostsService {
  private mapPlaces: Map[] = [];
  private mapPlacesUpdated = new Subject<Map[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: Map[]}>('http://localhost:3000/api/posts')
      .subscribe((mapPlaceData) => {
        this.mapPlaces = mapPlaceData.posts;
        this.mapPlacesUpdated.next([...this.mapPlaces]);
      });
  }

  getPostUpdateListner() {
    return this.mapPlacesUpdated.asObservable();
  }

  inputPlace(source: string, destination: string) {
    const post: Place = {id: null, source: source, destination: destination};
  }
}
