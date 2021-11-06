import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../shared/places.service';
import { DataLocation } from '../shared/interfaces';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  form!: FormGroup
  showMap = false
  checkboxesCurrentId = 0

  distanceData: Array<any> = [
    { id: 0, name: '0.5km', value: 500, isSelected: true },
    { id: 1, name: '1km', value: 1000, isSelected: false },
    { id: 2, name: '5km', value: 5000, isSelected: false },
    { id: 3, name: '10km', value: 10000, isSelected: false },
    { id: 4, name: '20km', value: 20000, isSelected: false },
    { id: 5, name: '50km', value: 50000, isSelected: false },
    { id: 6, name: '100km', value: 100000, isSelected: false }
  ];

  constructor(public places: PlacesService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      query: new FormControl('restaurant')
    })
  }
  isAllSelected(event: Event | any, id: any): void {
    this.distanceData.forEach(val => {
      if (val.id === id) {
        val.isSelected = !val.isSelected;
      } else {
        val.isSelected = false;
      }
    });
    this.checkboxesCurrentId = id
    event.target.style.pointerEvents = 'none';
  }

  onSubmit(): void {

    // const newData: DataLocation = {
    //   query: this.form.value.query,
    //   radius: 100000,
    //   "lat": 49.8397,
    //   "lng": 24.0297
    // }
    this.showMap = false
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const newData: DataLocation = {
        query: this.form.value.query,
        radius: this.distanceData[this.checkboxesCurrentId].value,
        lat: coords.latitude,
        lng: coords.longitude
      }
      this.places.geolocationData = newData;
      this.showMap = true
      console.log(newData);

    })


    console.log(this.distanceData);

  }
  onCheckboxChange(e: any) {
    // const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    // if (e.target.checked) {
    //   checkArray.push(new FormControl(e.target.value));
    // } else {
    //   let i: number = 0;
    //   checkArray.controls.forEach((item: FormControl) => {
    //     if (item.value == e.target.value) {
    //       checkArray.removeAt(i);
    //       return;
    //     }
    //     i++;
    //   });
    // }
  }
}
