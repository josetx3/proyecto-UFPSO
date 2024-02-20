import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "@app/core/services/storage.service";
import {Observable} from "rxjs";
import {HttpService} from "@app/core/services/http.service";
import {EndPoints} from "@app/core/utils/end-points";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private _http: HttpService,
    private _storage: StorageService
  ) {
  }

  public login(authLogin: any): Observable<any> {
    console.log(authLogin);
    return this._http.post<any, any>(EndPoints.LOGIN, authLogin, true);
  }

  public logout(): void {
    this._storage.removeAll();
    this.router.navigateByUrl('/').then();
    location.reload();
  }
}
