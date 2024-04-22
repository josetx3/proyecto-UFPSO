import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {getLocaleCurrencyCode} from "@angular/common";

@Pipe({
  name: 'customIso'
})
export class CustomIsoPipe implements PipeTransform {

  constructor(
    @Inject(LOCALE_ID) public locale: string[]
  ) {
  }

  transform(value?: number, currency?: string, ...args: unknown[]): unknown {

    if (!isValue(value)) return null;

    const localeCurrencyCode: string | null = getLocaleCurrencyCode(this.locale[0]);
    let currencyCode: string = (typeof localeCurrencyCode === 'string') ? localeCurrencyCode : 'USD';

    if (currency) {
      currencyCode = currency;
    }
    if (!value) {
      return currencyCode + ' 0.00';
    }
    const countDots = value.toString().split('.').length - 1;
    if (countDots > 1) {
      return '';
    }
    let dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode
    });
    value = parseFloat(value.toString().replace('$', '').replace('Bs ', ''));

    return dollarUS.format(value).replace('USD', '$').replace(/BOB/g, 'Bs ')
  }
}

function isValue(value: unknown) {
  return !(value == null || value === '' || value !== value);
}
