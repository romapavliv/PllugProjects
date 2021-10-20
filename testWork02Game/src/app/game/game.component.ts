import { Component  } from '@angular/core';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent   {
  elements: Array<string> =[];

  steps = 0
  fruits: Array<string> = ['https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
    'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI1fHxmcnVpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80',
    'https://images.unsplash.com/photo-1552914953-938eef0ce926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1601379759471-d2df573e7d8c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1617235278398-c8497b232429?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI2fHxmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
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
