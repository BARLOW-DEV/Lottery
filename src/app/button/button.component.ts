import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText!: string;
  @Output() addNumber = new EventEmitter<number>();
  addButtonIndex = 0;
  addButton = ['Add First', 'Add Second', 'Add Third', 'Add Fourth', 'Add Fifth', 'Add Sixth']
  numberToAdd!: number;
  enteredNumber!: number;


  constructor() {
    this.buttonText = this.addButton[this.addButtonIndex];
   }

  ngOnInit(): void {
  }

  onClickAdd(enteredNumber: number) {
    if(this.addButtonIndex === 5) {
      this.buttonText = this.addButton[0];
      this.addButtonIndex = 0;
    } else {
    this.buttonText = this.addButton[++this.addButtonIndex];
    }

    console.log('Adding Number!')
    this.numberToAdd = enteredNumber;
    this.addNumber.emit(this.numberToAdd)
  }

}
