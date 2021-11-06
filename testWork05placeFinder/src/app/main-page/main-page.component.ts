import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../shared/places.service';
import { DataLocation } from '../shared/interfaces';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  form!: FormGroup
  showMap = false

  constructor(public places: PlacesService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      query: new FormControl('restaurant')
    })
  }

  onSubmit(): void {

    // const newData: DataLocation = {
    //   query: this.form.value.query,
    //   radius: 100000,
    //   "lat": 49.8397,
    //   "lng": 24.0297
    // }
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const newData: DataLocation = {
        query: this.form.value.query,
        radius: 100000,
        lat: coords.latitude,
        lng: coords.longitude
      }
      this.places.geolocationData = newData;
      this.showMap = true
    })

  }
}
