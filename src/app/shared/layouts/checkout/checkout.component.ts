import {Component, OnInit} from '@angular/core';
import {Chairs} from "@app/modules/user/interfaces/purchase.interface";
import {Subscription} from "rxjs";
import {PurchaseService} from "@app/modules/user/services/purchase.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  selectedChairs: Chairs[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private _purchase: PurchaseService) {
  }

  ngOnInit(): void {
    this.subscription = this._purchase.selectedChairs$.subscribe(chairs => {
      this.selectedChairs = chairs;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
