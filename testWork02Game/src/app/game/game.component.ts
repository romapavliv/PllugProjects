import { Component, OnDestroy  } from '@angular/core';
import { Router } from '@angular/router';
import { GameTypeService } from '../shared/game-type.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnDestroy  {
  elements: Array<string> =[];
  steps: number = 0;
  time: any = 0;
  timer!:any
  constructor(
    private gameType: GameTypeService,
    private router: Router
  ) {
    this.elements = this.gameType.getCards();
    this.gameStart()
  }

  gameStart() {
    this.timer = setInterval(() => {
        this.time++
       console.log(this.time);

    },1000)
  }

  rotateDiv(event: any) {
    let allRotateCards:number = document.querySelectorAll('.rotate').length
    if (event.target.classList.contains('rotate') || event.target.classList.contains('invalid')|| allRotateCards > 1)  {
      return
    }
    const allCards = [...event.target.parentNode.children]

    if (allRotateCards < 2 ) {
      event.target.classList.add('rotate');
      allRotateCards++;
    }

    if (allRotateCards > 1) {
      this.guessedCards()
      this.steps++
      setTimeout(() => {
        allCards.forEach((el) => {
          el.classList.remove('rotate')
        })
        if (this.winCheck()) {
          this.gameType.addDataToUser(this.steps, this.time)
          this.router.navigate(['/win'])
        }
      },1000)
    }
  }

  winCheck() {
    const cards: any = Array.from(document.querySelectorAll('.cards__card'))
    const test = cards.map((card:any) => card.classList.contains('invalid'));
    return test.every((val:boolean) => val === true)
  }

  guessedCards() {
    const twoRotateElement:any = document.querySelectorAll('.rotate')
    const firstSrc = twoRotateElement[0].lastChild?.firstChild.getAttribute("src");
    const secondSrc = twoRotateElement[1].lastChild?.firstChild.getAttribute("src");
    if (firstSrc === secondSrc) {
      [...twoRotateElement].forEach((el) => {
        el.classList.add('invalid')
      })
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer)
  }
}


