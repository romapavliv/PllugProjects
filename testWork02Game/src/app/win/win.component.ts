import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hideRecords } from '../shared/animations';
import { GameTypeService } from '../shared/game-type.service';
import { User } from '../shared/interfaces';
import { RecordsService } from '../shared/records.service';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss'],
  animations: [hideRecords],
})
export class WinComponent implements OnInit {
  currentResults:Array<User> =[]
  resultsFor10Cards:Array<User> =[]
  resultsFor20Cards:Array<User> =[]
  buttonsActive = true;
  winUser!: User
  recordsState = 'hide'

  constructor(
    private gameType: GameTypeService,
    private router: Router,
    private recordsService: RecordsService
  ) { }

  ngOnInit(): void {
    this.winUser  = {
      cardType: "Fruits",
      nickname: "Taras",
      numberOfCard: "20",
      steps: 9,
      time: 22
    }
    //!Debug

    //this.winUser = this.gameType.getUser();
    this.recordsService.getRecord().subscribe((allResults) => {
      this.resultsFor10Cards = this.sortData(allResults, 10)
      this.resultsFor20Cards = this.sortData(allResults, 20)
      this.currentResults = this.resultsFor10Cards
    }, (err) => {

    })

    if (!this.winUser) {
      this.router.navigate(['/'])
    }
  }

  changeRecordsData(numberOfCard: number) {
    this.buttonsActive = numberOfCard === 10 ? true : false
    numberOfCard === 10 ? this.currentResults = this.resultsFor10Cards : this.currentResults = this.resultsFor20Cards
  }

  sortData(results:Array<User> ,numberOfCard:number) {
    return results.filter((result) => +result.numberOfCard === numberOfCard)
      .sort((a: User, b: User) => a.time! - b.time!)
      .slice(0, 10);
  }

}
