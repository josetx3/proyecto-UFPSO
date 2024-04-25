import {Component, ElementRef, OnInit} from '@angular/core';
import {PurchaseService} from "@app/modules/user/services/purchase.service";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  screen: number = 1;

  public chairs: any;

  // chairs: any[] = [
  //   {
  //     chair_id: 'A1',
  //     chair_img: 'assets/img/Sillas/silla-desactivada.svg',
  //   },
  //   {
  //     chair_id: 'A2',
  //     chair_img: 'assets/img/Sillas/silla-desactivada.svg',
  //   },
  //   {
  //     chair_id: 'A3',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'A4',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'A5',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'A6',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'A7',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'A8',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'A9',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'A10',
  //     chair_img: 'assets/img/Sillas/silla-seleccionada.svg',
  //   },
  //
  //
  //   {
  //     chair_id: 'B1',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'B2',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'B3',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'B4',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'B5',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'B6',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'B7',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'B8',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'B9',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'B10',
  //     chair_img: 'assets/img/Sillas/silla-seleccionada.svg',
  //   },
  //
  //
  //   {
  //     chair_id: 'C1',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'C2',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'C3',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'C4',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'C5',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'C6',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'C7',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'C8',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'C9',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'C10',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //
  //
  //   {
  //     chair_id: 'D1',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'D2',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'D3',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'D4',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'D5',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'D6',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'D7',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'D8',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'D9',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'D10',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //
  //
  //   {
  //     chair_id: 'E1',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'E2',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'E3',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'E4',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'E5',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'E6',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'E7',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'E8',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'E9',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'E10',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //
  //
  //   {
  //     chair_id: 'F1',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'F2',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'F3',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'F4',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'F5',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'F6',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'F7',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'F8',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'F9',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'F10',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //
  //
  //   {
  //     chair_id: 'G1',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'G2',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'G3',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'G4',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'G5',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'G6',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'G7',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'G8',
  //     chair_img: 'assets/img/Sillas/silla-ocupada.svg',
  //   },
  //   {
  //     chair_id: 'G9',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  //   {
  //     chair_id: 'G10',
  //     chair_img: 'assets/img/Sillas/silla-normal.svg',
  //   },
  // ]

  // chairsA: any[] = this.chairs.filter(chair => chair.chair_id.charAt(0) === 'A');
  // chairsB: any[] = this.chairs.filter(chair => chair.chair_id.charAt(0) === 'B');
  // chairsC: any[] = this.chairs.filter(chair => chair.chair_id.charAt(0) === 'C');
  // chairsD: any[] = this.chairs.filter(chair => chair.chair_id.charAt(0) === 'D');
  // chairsE: any[] = this.chairs.filter(chair => chair.chair_id.charAt(0) === 'E');
  // chairsF: any[] = this.chairs.filter(chair => chair.chair_id.charAt(0) === 'F');
  // chairsG: any[] = this.chairs.filter(chair => chair.chair_id.charAt(0) === 'G');

  chairsA: any = '';
  chairsB: any = '';
  chairsC: any = '';
  chairsD: any = '';
  chairsE: any = '';
  chairsF: any = '';
  chairsG: any = '';

  constructor(
    private elementRef: ElementRef,
    private _purchase: PurchaseService
  ) {
  }

  ngOnInit() {
    this.getDataChair();
  }

  getDataChair() {
    this._purchase.getDataChair().subscribe({
      next: (data: any) => {
        this.chairs = data;
        console.log(this.chairs)
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
