import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLocation, DataPlace } from './interfaces';

@Injectable({
  providedIn: 'root',
})

export class PlacesService {
  private geoData!: DataLocation;

  constructor(private http: HttpClient) { };

  placeSearch(): Observable<DataPlace> {

    // return this.http.post<DataPlace>(`${environment.SWUrl}/search`, {
    //   "query": "restaurant",
    //   "radius": 500,
    //   "lat": 49.8397,
    //   "lng": 24.0297
    // }); //!DEBUG
    return this.http.post<DataPlace>(`${environment.SWUrl}/search`, this.geoData);
  }

  placeScv(data: DataLocation): Observable<string> {
    const headers = new HttpHeaders({
      Accept: 'text/csv',
    });
    const options = { headers, responseType: 'text' as any };

    return this.http.post<string>(`${environment.SWUrl}/csv`, data, options);
  }

  set geolocationData(geoData: DataLocation) {
    this.geoData = geoData;
  }

  get geolocationData(): DataLocation {
    return this.geoData;
  }
}
