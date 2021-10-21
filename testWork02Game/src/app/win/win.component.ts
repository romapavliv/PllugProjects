import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameTypeService } from '../shared/game-type.service';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit {
  currentResults:Array<User> =[]
  resultsFor10Cards:Array<User> =[]
  resultsFor20Cards:Array<User> =[]

  winUser!: User
  allResults: Array<User> =[]

  constructor(
    private gameType: GameTypeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.winUser = {
      cardType: "Fruits",
      nickname: "Taras",
      numberOfCard: "20",
      steps: 9,
      time: 22
    }
     const someUser:User = {
      cardType: "Fruits",
      nickname: "Petro",
      numberOfCard: "20",
      steps: 100,
      time: 10
    }
     const anotherUser:User = {
      cardType: "Fruits",
      nickname: "Petro",
      numberOfCard: "20",
      steps: 100,
      time: 300
    }
    const emptyUser:User = {
      cardType: "Fruits",
      nickname: "Petro",
      numberOfCard: "20",
      steps: 100,
      time: 300
    }
    //! debug
    //this.winUser = this.gameType.getUser();

    this.allResults.push(emptyUser)
    this.allResults.push(emptyUser)
    this.allResults.push(emptyUser)
    this.allResults.push(someUser)
    this.allResults.push(emptyUser)
    this.allResults.push(anotherUser)
    this.allResults.push(this.winUser)
    this.allResults.push(this.winUser)
    this.allResults.push(this.winUser)
    this.allResults.push(this.winUser)
    this.allResults.push(this.winUser)
    this.allResults.push(this.gameType.getUser())

    this.resultsFor10Cards = this.sortData(this.allResults, 10)
    this.resultsFor20Cards = this.sortData(this.allResults, 20)

    this.currentResults = this.resultsFor10Cards


    if (!this.winUser) {
      this.router.navigate(['/'])
    }
  }

  changeRecordsData(numberOfCard:number) {
    numberOfCard === 10 ? this.currentResults = this.resultsFor10Cards : this.currentResults = this.resultsFor20Cards
  }

  sortData(results:Array<User> ,numberOfCard:number) {
    return results.filter((result) => +result.numberOfCard === numberOfCard)
      .sort((a: User, b: User) => a.time! - b.time!)
      .slice(0, 10);
  }

}
