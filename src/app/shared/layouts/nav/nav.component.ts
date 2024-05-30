import {Component, OnInit} from '@angular/core';
import {CheckoutService} from "@app/modules/user/services/checkout.service";
import {StorageService} from "@app/core/services/storage.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  user: any;
  dataCheckout: any[] = []
  isFullScreen: boolean = false;
  viewScreenPayments: boolean = false;

  constructor(
    private _checkout: CheckoutService,
    private _storage: StorageService,
  ) {
    this.user = _storage.getItem('user_data');
  }

  toggleFullScreen(): void {
    if (!this.isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        (document.documentElement as any).webkitRequestFullscreen();
      } else if ((document.documentElement as any).msRequestFullscreen) {
        (document.documentElement as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
    this.isFullScreen = !this.isFullScreen;
  }

  openInfoPayments(): void {
    this.viewScreenPayments = !this.viewScreenPayments;
    this._checkout.getCheckoutOrders().subscribe({
      next: (data_checkout) => {
        console.log(data_checkout.content)
        this.dataCheckout = data_checkout.content;
        console.log(this.dataCheckout)
      }
    })
  }


}
