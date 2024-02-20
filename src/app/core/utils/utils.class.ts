import {ElementRef, Injectable, Renderer2} from "@angular/core";
import {AbstractControl} from "@angular/forms";
import {Errors} from "@app/core/interfaces/validator.interface";


@Injectable()
export class Utils {

  constructor(
    private renderer2: Renderer2
  ) {
  }

  public _validateErrors(control: AbstractControl, errors: Errors[]): void {
    errors.forEach((value) => {
      this._rendererClass(control, value.elementRef, value.name);
    });
  }

  private _rendererClass(control: AbstractControl, element: ElementRef, error: string): void {
    if (control?.value) {
      if (control.errors && error in control.errors) {
        this.renderer2.removeClass(element.nativeElement, 'validate-check')
      } else {
        this.renderer2.addClass(element.nativeElement, 'validate-check')
      }
    } else {
      this.renderer2.removeClass(element.nativeElement, 'validate-check')
    }
  }
}
