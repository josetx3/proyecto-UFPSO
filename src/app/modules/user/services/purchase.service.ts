import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "@app/core/services/http.service";
import {StorageService} from "@app/core/services/storage.service";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(
    private _http: HttpService,
    private _storage: StorageService
  ) { }

  public getDataChair(): Observable<any> {
    return this._http.get<any>(EndPoints.GET_CHAIRS);
  }


}
