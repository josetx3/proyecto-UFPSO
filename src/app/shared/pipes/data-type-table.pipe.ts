import {ElementRef, Inject, LOCALE_ID, Pipe, PipeTransform, Renderer2} from '@angular/core';
import {DatePipe} from '@angular/common';
import {CustomIsoPipe} from "@app/shared/pipes/custom-iso.pipe";
import {StorageService} from "@app/core/services/storage.service";

@Pipe({
  name: 'dataTypeTable',
})
export class DataTypeTablePipe implements PipeTransform {
  // private storedCurrency: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private customCurrencyPipe: CustomIsoPipe,
    private datePipe: DatePipe,
    // private _storage: StorageService,
    @Inject(LOCALE_ID) public locale: string,
  ) {
    // this.storedCurrency = this._storage.getItem<string>('iso');
  }

  transform(value: unknown, dataType: string, currency?: string): unknown {
    switch (dataType) {
      case 'text': {
        if (!isValue(value)) return 'No aplica';
        return value;
      }
      case 'currency': {
        if (typeof value === 'number') {
          return this.customCurrencyPipe.transform(value, currency);
        }
        console.warn('Valor invalido');
        return 'null';
      }
      case 'payments': {
        if (!isValue(value) || value == 0) return 'No aplica';
        return value;
      }
      case 'status': {
        if (typeof value !== 'boolean') {
          console.warn('Valor invalido');
          return null;
        }
        return value ? 'Activo' : 'Inactivo';
      }
      case 'statusName': {
        this.renderer.addClass(this.el.nativeElement.parentElement, 'dataTypeTable');
        if (typeof value !== 'string') {
          console.warn('Valor invalido');
          return null;
        }
        const valueUpperCase = value.charAt(0).toUpperCase() + value.slice(1);
        this.addStatus(valueUpperCase.toUpperCase());
        return valueUpperCase;
      }
      case 'statusCommerce': {
        this.renderer.addClass(this.el.nativeElement.parentElement, 'dataTypeTable');
        if (typeof value !== 'string') {
          console.warn('Valor invalido');
          return null;
        }
        this.addStatus(value);
        if (value === 'ACTIVE') return 'Activo';
        if (value === 'SUSPENDED') return 'Suspendido';
        if (value === 'CANCELED') return 'Cancelado';
        if (value === 'INACTIVE') return 'Inactivo';
        if (value === 'LOCKED') return 'Bloqueado';
        return null;
      }


      case 'availability': {
        this.renderer.addClass(this.el.nativeElement.parentElement, 'dataTypeTable');
        if (typeof value !== 'string') {
          console.warn('Valor invalido');
          return null;
        }
        this.addStatus(value);
        if (value === 'Estreno') return 'Estreno';
        if (value === 'En cartelera') return 'En cartelera';
        if (value === 'Preventa') return 'Preventa';
        if (value === 'Proximamente') return 'Proximamente';
        if (value === 'Pasadas') return 'Pasadas';
        return null;

      }


      case 'dateTime': {
        if (!isValue(value)) return 'No aplica';
        const date: Date = new Date(value);
        if (typeof date !== 'object') {
          console.warn('Valor invalido');
          return null;
        }
        return this.datePipe.transform(value, 'dd/MM/yyyy - hh:mm a', undefined, 'es-BO')
      }
      case 'date': {
        if (!isValue(value)) return 'No aplica';
        const date: Date = new Date(value);
        if (typeof date !== 'object') {
          console.warn('Valor invalido');
          return null;
        }
        return this.datePipe.transform(value, 'dd/MM/yyyy', undefined, 'es-BO')
      }
      case 'statusIf': {
        if (typeof value !== 'boolean') {
          console.warn('Valor invalido');
          return null;
        }
        return value ? 'Si' : 'No';
      }
      case 'requestType': {
        if (!(typeof value === 'boolean')) {
          console.warn('Valor invalido');
          return null;
        }
        return value ? 'Multiple' : 'Único';
      }
      case 'portalType': {
        if (!(typeof value === 'boolean')) {
          console.warn('Valor invalido');
          return null;
        }
        return value ? 'Parcial' : 'Completo';
      }
      case 'textLogoFranchise': {
        if (!isValue(value)) {
          this.renderer.addClass(this.el.nativeElement.parentElement, 'dataTypeFranchiseClear');
          return this.renderer.setProperty(this.el.nativeElement.parentElement, 'innerHTML', `<div><span>----</span></div><div><span>----</span></div><div><span>----</span></div>`);
        }
        let split: string[] = [];
        if (typeof value === 'string') {
          split = value.split(' -- ');
          this.renderer.addClass(this.el.nativeElement.parentElement, 'dataTypeFranchise');
          this.renderer.setProperty(this.el.nativeElement.parentElement, 'innerHTML', `${split[0]} <div class="${split[2]} table-franchise"><img src="${split[1]}" alt="CarType"></div>`)
          return split[0];
        }
        return null;
      }
      case 'percentage': {
        if (typeof value !== 'number') {
          console.warn('Valor invalido');
          return null;
        }
        return value !== 0 ? value + '%' : '';
      }
      default: {
        return value;
      }
    }
  }

  addStatus(value: string): void {
    if (value === 'PENDIENTE') {
      this.addClass('pending');
    } else if ((value === 'APROBADA') || (value === 'ACTIVE') || (value === 'ACTIVA') || (value === 'ACTIVO') || (value === 'Estreno')) {
      this.addClass('approved');
    } else if ((value === 'RECHAZADA') || (value === 'INACTIVE') || (value === 'CANCELED') || (value === 'INACTIVA') || (value === 'INACTIVO') || (value === 'LOCKED') || (value === 'Pasadas')) {
      this.addClass('rejected');
    } else if ((value === 'REVERSADA') || (value === 'Preventa')) {
      this.addClass('reversed');
    } else if ((value === 'EXPIRADO') || (value === 'FINALIZADA') || (value === 'ELIMINADO') || (value === 'SUSPENDED') || (value === 'Próximamente')) {
      this.addClass('expired');
    } else if ((value === 'CONGELADO') || (value === 'BLOQUEADO') || (value === 'En cartelera')) {
      this.addClass('frozen');
    } else if ((value === 'POR CANCELAR')) {
      this.addClass('to-cancel');
    } else if ((value === 'Proximamente')) {
      this.addClass('next')
    } else {
      console.warn('Estado no definido', value)
    }
  }

  addClass(status: string): void {
    this.renderer.addClass(this.el.nativeElement.parentElement, status);
  }

}

function isValue(value: number | string | null | undefined | unknown): value is number | string {
  return !(value == null || value === '' || value !== value);
}
