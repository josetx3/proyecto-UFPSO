import { Pipe, PipeTransform } from '@angular/core';
import { Permissions } from '@app/shared/lang/es/permissions';

@Pipe({
  name: 'permission'
})
export class PermissionPipe implements PipeTransform {
  private permissions: any = Permissions;

  transform(value: string, ...args: unknown[]): unknown {
    return this.permissions[value];
  }

}
