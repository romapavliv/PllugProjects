import { Component, OnDestroy  } from '@angular/core';
import { Router } from '@angular/router';
import { rotateCard } from '../shared/animations';
import { GameTypeService } from '../shared/game-type.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: rotateCard,
})
export class GameComponent implements OnDestroy  {
  cardsState :Array<string> = []
  elements: Array<string> = [];
  userData!:any
  steps: number = 0;
  time: any = 0;
  timer!:any
  constructor(
    private gameType: GameTypeService,
    private router: Router
  ) {
    // this.elements = [
    //   'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
    //   'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI1fHxmcnVpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    //   'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80',
    //   'https://images.unsplash.com/photo-1552914953-938eef0ce926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    //   'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    //   'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
    //   'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI1fHxmcnVpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    //   'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80',
    //   'https://images.unsplash.com/photo-1552914953-938eef0ce926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    //   'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    // ]
    // this.userData = {
    //   name: 'Taras', numberOfCard: '10', cardType: 'Fruits'
    // }
    //! Debug
    this.elements = this.gameType.getCards();
    this.userData = this.gameType.getUser();
    this.cardsState.length = this.elements.length;
    this.cardsState.fill('start', 0, this.elements.length);
    console.log(this.userData);

    this.gameStart()
  }

  changeState(idx:number) {
    let rotatedCards = this.cardsState.filter((card) => card === 'rotate').length;
    if (this.cardsState[idx] === 'rotate' || this.cardsState[idx] === 'invalid' || rotatedCards > 1)  {
       return
    }
    if (rotatedCards < 2 ) {
      this.cardsState[idx] = 'rotate';
      rotatedCards++;
     }

    if (rotatedCards > 1) {
      this.steps++
      setTimeout(() => {
        this.guessedCards()
        this.cardsState = this.cardsState.map((card) => card === 'rotate'? card = 'start':card)
        if (this.winCheck()) {
           this.gameType.addDataToUser(this.steps, this.time)
           this.router.navigate(['/win'])
        }
      },1000)
    }
  }

  gameStart() {
    this.timer = setInterval(() => {
        this.time++
    },1000)
  }

  winCheck() {
    const test = this.cardsState.map((card:any) => card === 'invalid');
    return test.every((val:boolean) => val === true)
  }

   guessedCards() {
    const firstIdx = this.cardsState.indexOf('rotate');
    const lastIdx = this.cardsState.lastIndexOf('rotate');

    if (this.elements[firstIdx] === this.elements[lastIdx]) {
      this.cardsState = this.cardsState.map((card) => card === 'rotate'? card = 'invalid':card)
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer)
  }
}


