import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-combos-edit',
  templateUrl: './combos-edit.component.html',
  styleUrls: ['./combos-edit.component.scss']
})
export class CombosEditComponent implements OnInit {

  @Output() editCombo: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
}
