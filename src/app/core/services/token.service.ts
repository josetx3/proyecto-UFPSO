import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EndPoints } from '@app/core/utils/end-points';
import { HttpService } from '@app/core/services/http.service';
import {TokenRefreshRequest, TokenRefreshResponse} from "@app/modules/user/auth/interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private _http: HttpService) {
  }

  public refresh(data: TokenRefreshRequest): Observable<TokenRefreshResponse> {
    return this._http.post<TokenRefreshRequest, TokenRefreshResponse>(EndPoints.TOKEN_REFRESH, data);
  }
}
