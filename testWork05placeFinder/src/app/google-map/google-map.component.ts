import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  test = [{ name: 'Ресторація Бачевських', city: 'Львів', address: 'вул. Шевська, 8', lat: 49.842168, lng: 24.029843 }
    , { name: 'Ресторація над Цукернею', city: 'Львів', address: 'вул. Староєврейська, 3', lat: 49.84039138397288, lng: 24.03127379942613 }
    , { name: 'Grand Cafe Leopolis', city: 'Львів', address: 'Rynok sq., 1', lat: 49.842137479824565, lng: 24.031619131565094 }
    , { name: 're:bro', city: 'Львів', address: 'вул. Героїв УПА, 73', lat: 49.82965056608033, lng: 23.994269371032715 }
    , { name: 'Saigon', city: 'Львів', address: 'вул. Модеста Менцинського, 3', lat: 49.842203, lng: 24.022 }
    , { name: 'Супкультура', city: 'Львів', address: 'вул. Ковжуна, 6', lat: 49.83736396643521, lng: 24.029217123772508 }
    , { name: "Кав'ярня в Сільпо", city: 'Львів', address: 'вул. Під Дубом, 7б', lat: 49.849391890142805, lng: 24.021256374042995 }
    , { name: 'Банзай Кулінарна Студія', city: 'Львів', address: 'вул. Чайковського, 26', lat: 49.836384, lng: 24.027272 }

  ]

  lat = 49.8397;
  lng = 24.0297;

  constructor() {
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      // this.lat = coords.latitude;
      // this.lng = coords.longitude;
      //!DEBUG
    }, () => {
      this.lat = 49.8397
      this.lng = 24.0297
    })
  }
}
