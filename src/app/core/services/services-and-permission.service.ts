import {Injectable} from '@angular/core';
import {StorageService} from "@app/core/services/storage.service";
import {AuthModuleTest, AuthPermission} from "@app/modules/user/auth/interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class ServicesAndPermissionService {

  constructor(
    private _storage: StorageService
  ) {
  }

  isPermissionModule(route: string | undefined): boolean {
    const modules: AuthModuleTest[] = this._storage.getItem<AuthModuleTest[]>('menu');
    return !!(modules.find(x => x.module_route === route));
  }

  isPermissionActive(permissionName: string): boolean {
    const permissions: AuthPermission[] = this._storage.getItem<AuthPermission[]>('permissions');
    return !!(permissions.find(x => x.name === permissionName));
  }

}
