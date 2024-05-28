import {Injectable} from '@angular/core';
import {HttpService} from "@app/core/services/http.service";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private _http: HttpService) {
  }

  public sendCheckout(data: any): Observable<any> {
    return this._http.post(EndPoints.CHECKOUT, data, false);
  }

  public getInfoCheckout(id: string): Observable<any> {
    return this._http.get<any>(EndPoints.CHECKOUT + id)
  }

}
