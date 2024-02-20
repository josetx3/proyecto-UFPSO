import { Injectable } from '@angular/core';
import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { StorageService } from '@app/core/services/storage.service';
import { AuthService } from '@app/core/services/auth.service';
import { AlertService } from '@app/core/services/alert.service';
import { EndPoints } from '@app/core/utils/end-points';
import { TokenService } from '@app/core/services/token.service';
import {TokenRefreshRequest, TokenRefreshResponse} from "@app/modules/user/auth/interfaces/auth.interface";

export const CLEAR_AUTHORIZATION = new HttpContextToken(() => false);

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private _storage: StorageService,
        private _tokenService: TokenService,
        private _auth: AuthService,
        private _alertService: AlertService,
    ) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isRefreshTokenRequest: boolean = request.url.includes(EndPoints.TOKEN_REFRESH);
        if (!isRefreshTokenRequest) {
            return this.refreshToken().pipe(
                switchMap(() => {
                    const access_token: string = this._storage.getItem('access_token');
                    if (!request.context.get(CLEAR_AUTHORIZATION) && access_token) {
                        request = AuthInterceptor.addTokenHeader(request, access_token);
                    }
                    return next.handle(request);
                }),
                catchError((error) => {
                    if (error.status == 401 && error.error.message === 'Token expired') {
                        this._auth.logout();
                        this._alertService.warning('Tiempo expirado , vuelve a iniciar sesión');
                    }
                    return throwError(error);
                })
            );
        } else {
            return next.handle(request);
        }
    }

    private refreshToken(): Observable<TokenRefreshResponse | null> {
        const token: string = this._storage.getItem('refresh_token');
        if (token) {
            const data: TokenRefreshRequest = {
                refresh_token_id: token,
            }
            return this._tokenService.refresh(data).pipe(
                tap((data: TokenRefreshResponse) => {
                    this._storage.setItem('access_token', data.access_token);
                    this._storage.setItem('refresh_token', data.refresh_token);
                })
            );
        } else {
            return of(null);
        }
    }

    private static addTokenHeader(request: HttpRequest<any>, token: string) {
        return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    }
}
