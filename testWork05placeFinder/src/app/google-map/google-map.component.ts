import { Component, OnInit } from '@angular/core';
import { AgmInfoWindow, MapsAPILoader } from '@agm/core';

import { PlacesService } from '../shared/places.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  zoomData: any = {
    500: 16,
    1000: 15,
    5000: 15,
    10000: 14,
    20000: 13,
    50000: 10,
    100000: 10,
  };
  lat = 49.8397;
  lng = 24.0297;
  place!: any;
  openedInfoWindow!: any;
  mapZoom = 14;

  constructor(
    public mapsAPILoader: MapsAPILoader,
    private places: PlacesService) {
  }

  ngOnInit(): void {
    this.mapZoom = this.zoomData[this.places.geolocationData.radius]
    this.lat = this.places.geolocationData.lat;
    this.lng = this.places.geolocationData.lng;
    this.places.placeSearch().subscribe((placesData: any) => {
      this.place = placesData;
    })
  }

  markerClick(infoWindow: AgmInfoWindow): void {
    if (this.openedInfoWindow) {
      this.openedInfoWindow.close();
    }
    infoWindow.open();
    this.openedInfoWindow = infoWindow;
  }
}
