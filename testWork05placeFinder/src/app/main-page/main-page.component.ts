import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../shared/places.service';
import { DataLocation } from '../shared/interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  obj: DataLocation = {
    "query": "restaurant",
    "radius": 100000,
    "lat": 52,
    "lng": 24
  }
  constructor(private places: PlacesService) { }


  ngOnInit(): void {

    this.places.placeSearch(this.obj).subscribe((response) => {
      console.log(response);
    }, (err) => {
      console.log('some error', err);
    })
  }

}
