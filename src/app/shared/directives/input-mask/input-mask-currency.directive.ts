import {Directive, HostListener, Inject, LOCALE_ID} from '@angular/core';
import {StorageService} from "@app/core/services/storage.service";
import { getLocaleCurrencyCode } from '@angular/common';
import {NgControl} from "@angular/forms";
import {CustomIsoPipe} from "@app/shared/pipes/custom-iso.pipe";

@Directive({
  selector: '[appInputMaskCurrency]'
})
export class InputMaskCurrencyDirective {

  private storedCurrency: string;

  constructor(private _storage: StorageService,
              private customCurrencyPipe: CustomIsoPipe,
              private ngControl: NgControl,
              @Inject(LOCALE_ID) public locale: string) {
    this.storedCurrency = this._storage.getItem<string>('iso');
  }

  @HostListener('blur', ['$event.target'])
  handleInputEvent(event: any) {
    let value = event.value;
    if (!value) return;

    const localeCurrencyCode: string | null = getLocaleCurrencyCode(this.locale[0]);
    let currencyCode: string = (typeof localeCurrencyCode === 'string') ? localeCurrencyCode : 'USD';
    value = value.replaceAll(this.storedCurrency + ' ', '');
    value = value.replaceAll(currencyCode + ' ', '');
    value = value.replaceAll(currencyCode + '', '');
    value = value.replaceAll(',', '');
    this.ngControl.control?.setValue(this.customCurrencyPipe.transform(value, this.storedCurrency));
  }
}
