import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '@app/core/services/storage.service';
import { AlertService } from '@app/core/services/alert.service';
import {AuthModule} from "@app/core/interfaces/auth.interface";
import {PermissionPipe} from "@app/shared/pipes/permission.pipe";
import {ServicesAndPermissionService} from "@app/core/services/services-and-permission.service";



@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  private permission: PermissionPipe = new PermissionPipe();

  private modules: AuthModule[] = [];

  constructor(
    private _alert: AlertService,
    private _permission: ServicesAndPermissionService,
    private _storage: StorageService,
    private router: Router
  ) {
    this.modules = this._storage.getItem<AuthModule[]>('menu');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    /*** --- Verifico si tiene permiso a esa ruta--- ***/
    if (route.data['permission'] && this._permission.isPermissionActive(route.data['permission'])) return true;

    this._alert.warning('No tienes permiso para la funcionalidad (' + this.permission.transform(route.data['permission']) + ')');

    this.router.navigateByUrl('/administration/' + this.modules[1].module_route).then();
    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.path && this._permission.isPermissionModule(route.path)) return true;

    this._alert.warning('No tienes permiso para este modulo');

    this.router.navigateByUrl('/').then();
    return false;
  }

}
