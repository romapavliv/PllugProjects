import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLocation, DataPlace } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private geoData!: DataLocation

  constructor(private http: HttpClient) { }

  placeSearch(): Observable<DataPlace> {
    console.log('test');

    return this.http.post<DataPlace>(`${environment.SWUrl}/search`, this.geoData);
  }

  set geolocationData(geoData) {
    this.geoData = geoData
  }

  get geolocationData(): DataLocation {
    return this.geoData;
  }

}
