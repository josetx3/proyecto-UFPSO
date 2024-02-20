import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputMask]'
})
export class InputMaskDirective {

  @Input('appInputMask') inputType: any = '';
  pattern!: RegExp;

  private regexMap: any = {
    integer: /^[0-9]*$/g,
    float: /^[\d\.]*$/g,
    documentNumber: /^[a-zA-Z0-9.-]*$/,
    words: /^[a-zA-ZÀ-ÿ\s]*$/g, //Nombres
    alphaNumeric: /^[a-zA-Z\d]*$/g, //Letras y números
    alphaNumericAccents: /^[a-zA-ZÀ-ÿ\s\d]*$/g, // Letras, números, espacios y caracteres especiales
    point25: /^\-?[0-9]*(?:\\.25|\\.50|\\.75|)$/g,
    email: /^[a-zA-Z0-9!#$%&.@'*+/=?^_`{|}~-]*$/,
    emails: /^[a-zA-Z0-9!#$%&.@'*+,/=?^_`{|}~-]*$/,
    url: /^[a-zA-ZÀ-ÿ0-9!#$%&.:@'*+/=?^_`{|}~-]*$/,
    alphaNumericSymbols: /^[a-zA-ZÀ-ÿ0-9\s!#$%&.:@'*+/=?^_`{|}~-]*$/, //Simboles adicionales y espacios - (dirección)
  };

  constructor() { }

  @HostListener('keypress', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.pattern = this.regexMap[this.inputType];
    this.pattern.lastIndex = 0;
    if (!this.pattern.test(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  paste(event: ClipboardEvent) {
    let pasteText = event.clipboardData?.getData('text');
    this.pattern = this.regexMap[this.inputType];
    this.pattern.lastIndex = 0;
    if (pasteText !== undefined) {
      if (!this.pattern.test(pasteText)) {
        event.preventDefault();
      }
    }
  }

}
