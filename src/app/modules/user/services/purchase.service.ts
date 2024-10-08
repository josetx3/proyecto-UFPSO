import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "@app/core/services/http.service";
import {StorageService} from "@app/core/services/storage.service";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";
import {Chairs, Foods} from "@app/modules/user/interfaces/purchase.interface";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(
    private _http: HttpService,
    private _storage: StorageService
  ) {
  }

  public getDataChair(): Observable<any> {
    return this._http.get<any>(EndPoints.GET_CHAIRS);
  }

  public getDAtaChairIdSchedule(id_schedule: string): Observable<any> {
    return this._http.get<any>(EndPoints.GET_CHAIR_ID + id_schedule, false);
  }

  //PASAR LA INFORMACION DE LAS SILLAS DESDE PURCHASE - CHECKOUT
  private selectedChairsSource = new Subject<Chairs[]>();
  selectedChairs$ = this.selectedChairsSource.asObservable();

  updateSelectedChairs(chairs: Chairs[]): void {
    this.selectedChairsSource.next(chairs);
  }

  //PASAR LA INFORMACION DE LA COMIDA DESDE PURCHASE - CHECKOUT
  private selectedFoodSource = new Subject<Foods[]>();
  selectedFoods$ = this.selectedFoodSource.asObservable();

  updateSelectedFoods(food: Foods[]) {
    this.selectedFoodSource.next(food);
  }

}
