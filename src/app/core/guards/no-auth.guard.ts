import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "@app/core/services/auth.service";
import {StorageService} from "@app/core/services/storage.service";
import {UserDataAuth} from "@app/core/interfaces/auth.interface";

export const noAuthGuard: CanActivateFn = (route, segments) => {
  const _auth = inject(AuthService)
  const router = inject(Router)
  const _storage = inject(StorageService)

  const user: UserDataAuth = _storage.getItem("user_data")

  if (!_auth.isLoggedIn()) {
    router.navigateByUrl('/').then();
    return false;
  }
  return true;
};

