import {Injectable} from '@angular/core';
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
    return this._http.post<any, any>(EndPoints.LOGIN, authLogin, false);
  }

  public logout(): void {
    this._storage.removeAll();
    this.router.navigateByUrl('/').then();
    location.reload();
  }

  public sendMultiFactorAuthentication(data: any): Observable<any> {
    return this._http.post<any, any>(EndPoints.VALIDATE_CODE, data);
  }

  public signedInSuccessfully(data: any): void {
    this._storage.setItem('access_token', data.token.access_token);
    this._storage.setItem('refresh_token', data.token.refresh_token);
    this._storage.setItem('user', data.user);
    this._storage.setItem('menu', data.modules);
    this._storage.setItem('is_administrator', data.user.is_administrator);
    this._storage.setItem('iso', data.user.commerce_iso);
    this._storage.setItem('permissions', data.permissions);
    setTimeout(() => {
      this.router.navigateByUrl((data.user.is_administrator ? 'administration' : '/')).then(
        () => {
          // if (!data.user.is_commerce) {
          //   location.reload();
          // }
        }
      );
    }, 500)
  }

}
