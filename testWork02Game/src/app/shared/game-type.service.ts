import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameTypeService {
  userData:any

  constructor() { }

  setUserData(user:any){
    this.userData = user
  }
}
