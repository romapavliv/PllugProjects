import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameTypeService } from '../shared/game-type.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public checklist: any[];
  form!:FormGroup

  constructor(private gameType:GameTypeService) {
    this.checklist = [
      { id: 1, value: "Fruits", isSelected: true },
      { id: 2, value: "Animals", isSelected: false },
      { id: 3, value: "Cars", isSelected: false }
    ];
    this.form = new FormGroup({
      nickname: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      cartNumber: new FormControl(20)
    })
  }

  ngOnInit(): void {

  }
  isAllSelected(item:any) {
    this.checklist.forEach(val => {
      if (val.id == item.id) val.isSelected = !val.isSelected;
      else {
        val.isSelected = false;
      }
    });
  }

  startGame() {
    if (this.form.invalid) {
      return;
    }

    const user = {
      name: this.form.get('nickname')?.value,
      cartNumber:this.form.get('cartNumber')?.value,
      cartType: this.checklist.filter((el) => el.isSelected === true)[0].value
    }
    this.gameType.setUserData(user);
  }
}
