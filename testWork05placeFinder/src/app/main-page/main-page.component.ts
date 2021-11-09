import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PlacesService } from '../shared/places.service';
import { Checkbox, DataLocation } from '../shared/interfaces';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  form!: FormGroup;
  showMap = false;
  radiusCurrentId = 0;
  responseTypeCurrentId = 0;

  radiusData: Array<Checkbox> = [
    { id: 0, name: '0.5km', value: 500, isSelected: true },
    { id: 1, name: '1km', value: 1000, isSelected: false },
    { id: 2, name: '5km', value: 5000, isSelected: false },
    { id: 3, name: '10km', value: 10000, isSelected: false },
    { id: 4, name: '20km', value: 20000, isSelected: false },
    { id: 5, name: '50km', value: 50000, isSelected: false },
    { id: 6, name: '100km', value: 100000, isSelected: false }
  ];
  responseTypeData: Array<Checkbox> = [
    { id: 0, name: 'Map', value: 'map', isSelected: true },
    { id: 1, name: 'Csv', value: 'csv', isSelected: false },
  ];

  constructor(
    private places: PlacesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/'], {});
    this.form = new FormGroup({
      query: new FormControl('restaurant'),
    });
  }

  isAllSelected({ target }: any, id: number, checkboxesData: Array<any>, isRadius: boolean): void {
    checkboxesData.forEach(val => {
      val.isSelected = val.id === id ? !val.isSelected : false;
    });
    isRadius ? this.radiusCurrentId = id : this.responseTypeCurrentId = id;
    target.style.pointerEvents = 'none';
  }

  onSubmit(): void {
    this.router.navigate(['/'], {});
    this.showMap = false;
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const newData: DataLocation = {
        query: this.form.value.query,
        radius: +this.radiusData[this.radiusCurrentId].value,
        lat: coords.latitude,
        lng: coords.longitude,
      }

      if (this.responseTypeData[this.responseTypeCurrentId].value === 'map') {
        this.places.geolocationData = newData;
        this.showMap = true;
      } else {
        this.places.placeScv(newData).subscribe((csv) => {
          const file = new Blob([csv], { type: 'text/csv' });
          saveAs(file, `${newData.query}${newData.radius / 1000}km.csv`);
        }, (err) => {
          this.router.navigate(['/'], { queryParams: { errorStatus: err.status } });
        })
      }
    })
  }
}
