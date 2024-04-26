import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {StorageService} from "@app/core/services/storage.service";
import {AuthModule, AuthUser} from "@app/modules/user/auth/interfaces/auth.interface";


export const adminGuard: CanActivateFn = (route, state) => {
  const _storage = inject(StorageService)
  const router = inject(Router)
  const administrator = _storage.getItem<AuthUser>('user');
  const module = _storage.getItem<AuthModule[]>('menu');
  const url: string = `/administration/${module[0].module_route}`;

  if (administrator.is_administrator) {
    return true;
  } else {
    // router.navigateByUrl(url).then();
    return false;
  }

};
