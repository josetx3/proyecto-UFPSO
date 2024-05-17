import {Injectable} from '@angular/core';
import {HttpService} from "@app/core/services/http.service";
import {RegisterCombo} from "@app/modules/administration/pages/combos/interfaces/combo.interface";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";

@Injectable({
  providedIn: 'root'
})
export class ComboService {

  constructor(private _http: HttpService) {
  }

  public registerCombo(data: RegisterCombo): Observable<any> {
    return this._http.post(EndPoints.COMBO, data);
  }


}
