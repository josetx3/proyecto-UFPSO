import {Injectable} from '@angular/core';
import {HttpService} from "@app/core/services/http.service";
import {RegisterFood} from "@app/modules/administration/interfaces/food.interface";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private _http: HttpService
  ) {
  }

  public registerFood(data: RegisterFood): Observable<any> {
    return this._http.post(EndPoints.FOOD, data);
  }

}
