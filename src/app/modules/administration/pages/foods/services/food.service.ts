import {Injectable} from '@angular/core';
import {HttpService} from "@app/core/services/http.service";
import {RegisterFood} from "@app/modules/administration/interfaces/food.interface";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private _http: HttpService
  ) {
  }

  public getFoodTable(params: HttpParams): Observable<any> {
    const defaultOptions = this._http.addParams(params);
    return this._http.get<any>(EndPoints.GET_ALL_FOOD, false, defaultOptions);
  }

  public registerFood(data: RegisterFood): Observable<any> {
    return this._http.post(EndPoints.FOOD, data);
  }

}
