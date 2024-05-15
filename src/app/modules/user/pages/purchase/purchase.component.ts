import {Component, ElementRef, OnInit} from '@angular/core';
import {PurchaseService} from "@app/modules/user/services/purchase.service";
import {Chairs} from "@app/modules/user/interfaces/purchase.interface";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  screen: number = 1;


  public chairs: Chairs[] = [];

  chairsA: Chairs[] = [];
  chairsB: Chairs[] = [];
  chairsC: Chairs[] = [];
  chairsD: Chairs[] = [];
  chairsE: Chairs[] = [];
  chairsF: Chairs[] = [];
  chairsG: Chairs[] = [];
  selectedChairs: Chairs[] = [];

  rows: Chairs[][] = [this.chairsA, this.chairsB, this.chairsC, this.chairsD, this.chairsE, this.chairsF, this.chairsG];


  constructor(
    private _purchase: PurchaseService
  ) {
  }

  ngOnInit() {
    this.getDataChair();
  }

  nextScreen(screen: number) {
    switch (screen) {
      case 1:
        this.screen = screen;
        break;
      case 2:
        this.screen = screen;
        break;
    }
  }

  getDataChair() {
    this._purchase.getDataChair().subscribe({
      next: (data: Chairs[]) => {
        this.chairs = data;
        this.chairsA = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'A'));
        this.chairsB = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'B'));
        this.chairsC = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'C'));
        this.chairsD = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'D'));
        this.chairsE = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'E'));
        this.chairsF = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'F'));
        this.chairsG = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'G'));
      }
    });
  }

  sortByColumn(chairs: Chairs[]): Chairs[] {
    return chairs.sort((a, b) => +a.column - +b.column);
  }

  toggleSelectChair(chair: Chairs): void {
    if (chair.status_place_to_sit && !chair.occupied_place_to_sit) {
      const index = this.selectedChairs.findIndex(selected => selected.place_to_sit_id === chair.place_to_sit_id);
      if (index === -1) {
        this.selectedChairs.push(chair);
      } else {
        this.selectedChairs.splice(index, 1);
      }
      this._purchase.updateSelectedChairs(this.selectedChairs);
    }
  }

  isSelected(chair: Chairs): boolean {
    return this.selectedChairs.some(selected => selected.place_to_sit_id === chair.place_to_sit_id);
  }


}
