import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from "@app/core/services/storage.service";
import {AuthModule} from "@app/modules/user/auth/interfaces/auth.interface";
import {AuthService} from "@app/core/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  modules: AuthModule[];
  constructor(
    private _auth: AuthService,
    private router: Router,
    private _storage: StorageService,

  ) {
    this.modules = this._storage.getItem<AuthModule[]>('menu');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._auth.isLoggedIn()) {
      const url: string = `/administration/${ this.modules[0].module_route }`;
      // this.router.navigateByUrl(url).then();
      return false;
    }
    return true;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._auth.isLoggedIn()) {
      // this.router.navigateByUrl('/administration').then();
      return false;
    }
    return true;
  }
}
