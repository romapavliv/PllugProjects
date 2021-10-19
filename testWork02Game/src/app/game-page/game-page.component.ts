import { Component  } from '@angular/core';
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent   {
  elements: Array<string> =[];

  steps = 0
  fruits: Array<string> = ['https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqyhSzKWawYBdCInUlQLj4g5h3fP6WBgCaA&usqp=CAU',
    'https://images.everydayhealth.com/images/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg'
  ]

  constructor() {
    this.elements = [...this.fruits, ...this.fruits].sort(() => Math.random() - 0.5);
  }

  rotateDiv(event: any) {
    let allRotateCards:number = document.querySelectorAll('.rotate').length
    if (event.target.classList.contains('rotate') || event.target.classList.contains('invalid')|| allRotateCards > 1)  {
      return
    }

    const allCards = [...event.target.parentNode.children]

    if (allRotateCards < 2 )
    {
      event.target.classList.add('rotate');
      allRotateCards++;
    }

    if (allRotateCards > 1) {
      const twoRotateElement:any = document.querySelectorAll('.rotate')
      const firstSrc = twoRotateElement[0].lastChild?.firstChild.getAttribute("src");
      const secondSrc = twoRotateElement[1].lastChild?.firstChild.getAttribute("src");
      if (firstSrc === secondSrc) {
        [...twoRotateElement].forEach((el) => {
          el.classList.add('invalid')
        })
      }

      this.steps++
      setTimeout(() => {
        allCards.forEach((el) => {
          el.classList.remove('rotate')
        })
      },
      1000)
    }
    console.log(this.steps);
  }
}
