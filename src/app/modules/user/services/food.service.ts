import {Injectable} from '@angular/core';
import {HttpService} from "@app/core/services/http.service";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private _http: HttpService) {
  }

  getFoodAll(): Observable<any[]> {
    return this._http.get(EndPoints.GET_FOOD_SALE);
  }

}
