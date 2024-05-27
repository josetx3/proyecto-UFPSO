import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {StorageService} from "@app/core/services/storage.service";
import {AlertService} from "@app/core/services/alert.service";

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const _storage = inject(StorageService);
  const _alert = inject(AlertService)

  if (typeof window !== 'undefined') {
    const admin = _storage.getItem("administrator");
    if (admin) {
      return true;
    } else {
      router.navigateByUrl('home').then();
      _alert.warning('Debes tener permisos de administrador');
      return false;
    }
  }
  return true;
};
