import {Injectable} from '@angular/core';
import {HttpService} from "@app/core/services/http.service";
import {RegisterCombo} from "@app/modules/administration/pages/combos/interfaces/combo.interface";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ComboService {

  constructor(private _http: HttpService) {
  }

  public getComboTable(params: HttpParams): Observable<any> {
    const defaultOptions = this._http.addParams(params);
    return this._http.get<any>(EndPoints.GET_COMBOS, false, defaultOptions);
  }

  public registerCombo(data: RegisterCombo): Observable<any> {
    return this._http.post(EndPoints.COMBO, data);
  }


}
