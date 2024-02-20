import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toast: ToastrService
  ) {
  }

  public success(message: string): void {
    this.toast.success(message, 'Éxito');
  }

  public info(message: string): void {
    this.toast.info(message, 'Información');
  }

  public warning(message: string): void {
    this.toast.warning(message, 'Advertencia');
  }

  public error(message: string): void {
    this.toast.error(message, 'Error');
  }
}
