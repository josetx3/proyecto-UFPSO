import {Injectable} from '@angular/core';
import * as SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  ls = new SecureLS({encodingType: 'aes', isCompression: false});

  constructor() {
  }

  setItem(key: string, value: any): void {
    this.ls.set(key, value);
  }

  getItem<T>(key: string): T {
    return this.ls.get(key);
  }

  removeItem(key: string): void {
    this.ls.remove(key);
  }

  removeAll(): void {
    this.ls.removeAll();
  }

  clear(): void {
    this.ls.clear();
  }

}
