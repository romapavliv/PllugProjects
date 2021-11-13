import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeolocationData, AllPlacesData } from './interfaces';

@Injectable({
  providedIn: 'root',
})

export class PlacesService {
  private geoData!: GeolocationData;

  constructor(private http: HttpClient) { };

  // get all places for map
  placeSearch(): Observable<AllPlacesData> {
    return this.http.post<AllPlacesData>(`${environment.SWUrl}/search`, this.geoData);
  }

  // get all places for csv file
  placeScv(data: GeolocationData): Observable<string> {
    const headers = new HttpHeaders({
      Accept: 'text/csv',
    });
    const options = { headers, responseType: 'text' as any };

    return this.http.post<string>(`${environment.SWUrl}/csv`, data, options);
  }

  set geolocationData(geoData: GeolocationData) {
    this.geoData = geoData;
  }

  get geolocationData(): GeolocationData {
    return this.geoData;
  }
}
