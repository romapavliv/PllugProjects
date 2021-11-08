import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

import { DataPlace } from '../shared/interfaces';
import { PlacesService } from '../shared/places.service';
declare var google: any;
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  //lat = 49.8397
  //lng = 24.0297

  constructor(
    public mapsAPILoader: MapsAPILoader,
    private places: PlacesService) {
  }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const yourPlace: DataPlace = {
      name: 'Your geolocation',
      lat: this.places.geolocationData.lat,
      lng: this.places.geolocationData.lng,
    }
    this.places.placeSearch().subscribe((placesData: any) => {
      this.mapsAPILoader.load().then(() => {
        const map = new google.maps.Map(
          document.getElementById("map"),
          {
            center: {
              lat: yourPlace.lat,
              lng: yourPlace.lng
            },
            zoom: 14,
          }
        );

        this.createMarker(map, yourPlace, 'You')
        placesData.forEach((place: DataPlace) => {
          this.createMarker(map, place);
        })
      });
    })

  }

  createMarker(map: any, place: DataPlace, label: string = '') {
    const newInfoWindow = new google.maps.InfoWindow({
      content: place.name,
    });
    const marker = new google.maps.Marker({
      position: {
        lat: place.lat,
        lng: place.lng
      },
      map,
      label,
    });
    marker.addListener("click", (event: any) => {
      console.log(event);

      newInfoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });

    });



  }
}
