import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getterProperty'
})
export class GetterPropertyPipe implements PipeTransform {

  transform(object: any, keyName: string, ...args: unknown[]): unknown {
    return object[keyName];
  }

}
