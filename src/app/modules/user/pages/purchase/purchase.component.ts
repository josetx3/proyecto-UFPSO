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


  constructor(
    private elementRef: ElementRef,
    private _purchase: PurchaseService
  ) {
  }

  ngOnInit() {
    this.getDataChair();
    console.log(this.chairsA)
  }

  getDataChair() {
    this._purchase.getDataChair().subscribe({
      next: (data: Chairs[]) => {
        this.chairs = data;
        this.chairsA = this.chairs.filter(chair => chair.row.charAt(0) === 'A');
        this.chairsB = this.chairs.filter(chair => chair.row.charAt(0) === 'B');
        this.chairsC = this.chairs.filter(chair => chair.row.charAt(0) === 'C');
        this.chairsD = this.chairs.filter(chair => chair.row.charAt(0) === 'D');
        this.chairsE = this.chairs.filter(chair => chair.row.charAt(0) === 'E');
        this.chairsF = this.chairs.filter(chair => chair.row.charAt(0) === 'F');
        this.chairsG = this.chairs.filter(chair => chair.row.charAt(0) === 'G');
        console.log(this.chairs)
        console.log(this.chairsA)
      }
    })
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


}
