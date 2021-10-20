import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameTypeService } from '../shared/game-type.service';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit {
  winUser!:any

  constructor(
    private gameType: GameTypeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // this.winUser = {
    //   cardType: "Fruits",
    //   name: "taras",
    //   numberOfCard: "10",
    //   steps: 9,
    //   time: 22
    // }
    this.winUser = this.gameType.getUser();
    if (!this.winUser) {
      this.router.navigate(['/'])
    }
  }

}
