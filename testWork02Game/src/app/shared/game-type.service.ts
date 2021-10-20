import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameTypeService {
  userData:any

  cards: any = {
    Fruits: [
      'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI1fHxmcnVpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80',
      'https://images.unsplash.com/photo-1552914953-938eef0ce926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1601379759471-d2df573e7d8c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1617235278398-c8497b232429?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI2fHxmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ],
    Animals: [
      'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1537211261771-e525b9e4049b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564166174574-a9666f590437?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1555169062-013468b47731?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    Cars: [
      'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1549925862-990ac5b34e35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1621252792374-2b79e3fcf295?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1611298280249-ea1e9c1e28f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1494697536454-6f39e2cc972d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxjYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
  }
  constructor(private router:Router) { }

  setUserData(user: any) {
    this.userData = user
  }

  getCards() {
     if (this.userData) {
      const cardType = this.cards[this.userData.cardType].slice(0, +this.userData.numberOfCard / 2)
      return [...cardType, ...cardType].sort(() => Math.random() - 0.5);
    }
    this.router.navigate(['/'])
    return []
  }

  addDataToUser(steps: number, time: any) {
    this.userData.steps = steps;
    this.userData.time = time;
  }

  getUser() {
    return this.userData
  }
}
