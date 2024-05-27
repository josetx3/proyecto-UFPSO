import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "@app/core/services/storage.service";
import {Observable} from "rxjs";
import {HttpService} from "@app/core/services/http.service";
import {EndPoints} from "@app/core/utils/end-points";
import {UserAuth} from "@app/core/interfaces/auth.interface";

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

  isAdministrator: boolean = false;

  public login(authLogin: any): Observable<any> {
    return this._http.post<any, any>(EndPoints.LOGIN, authLogin, false);
  }

  public logout(): void {
    this._storage.removeAll();
    this.router.navigateByUrl('home').then(
      () => {
        if (!this.isAdministrator) {
          window.location.reload();
        }
      }
    );
  }

  public sendMultiFactorAuthentication(data: any): Observable<any> {
    return this._http.post<any, any>(EndPoints.VALIDATE_CODE, data);
  }

  public signedInSuccessfully(data: UserAuth): void {
    this._storage.setItem('user_id', data.user_id);
    this._storage.setItem('access_token', data.token_jwt);
    this._storage.setItem('refresh_token', data.refresh_token);
    this._storage.setItem('user_data', data.user_data);
    this._storage.setItem('user_module', data.user_module);
    this._storage.setItem('user_permission', data.user_permission);
    this._storage.setItem('administrator', data.user_data.administrator);
    this.isAdministrator = data.user_data.administrator
    // setTimeout(() => {
    //   this.router.navigateByUrl((data.user.is_commerce ? 'administration' : '/')).then(
    //     () => {
    //       if (!data.user.is_commerce) {
    //         location.reload();
    //       }
    //     }
    //   );
    // }, 500)
  }

  public sigIn(userRequest: any): Observable<any> {
    return this._http.post<any, any>(EndPoints.SIG_IN, userRequest, true)
  }

}
