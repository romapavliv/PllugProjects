import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataLocation, DataPlace } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  placeSearch(data: DataLocation): Observable<DataPlace> {
    return this.http.post<DataPlace>(`${environment.SWUrl}/search`, data);
  }
}
