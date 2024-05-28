import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CheckoutService} from "@app/modules/user/services/checkout.service";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  checkoutId: string | null = '';
  dataCheckout: any = '';

  constructor(
    private route: ActivatedRoute,
    private _checkout: CheckoutService,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.checkoutId = params.get('id')
      this.getInfoCheckout();
    })
  }

  getInfoCheckout() {
    if (this.checkoutId) {
      this._checkout.getInfoCheckout(this.checkoutId).subscribe({
        next: (data) => {
          this.dataCheckout = data;
          console.log(this.dataCheckout)
        }
      })
    }

  }

}
