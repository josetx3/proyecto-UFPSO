import {Directive, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appInputMaskPercentage]'
})
export class InputMaskPercentageDirective {

  private alreadyExecuted = false;

  constructor(private renderer: Renderer2) {
  }

  @HostListener('input', ['$event'])
  onInput() {
    this.alreadyExecuted = false;
  }

  @HostListener('blur', ['$event'])
  onBlur(event: Event) {
    if (!this.alreadyExecuted) {
      const inputValue = (event.target as HTMLInputElement).value.replace('%', '');
      const numericValue = parseInt(inputValue, 10);
      const formattedValue = this.addPercentage(numericValue);
      this.renderer.setProperty(event.target, 'value', formattedValue);
      this.alreadyExecuted = true;
    }
  }

  private addPercentage(value: number): string {
    if (value < 1) {
      return '1%';
    } else if (value > 100) {
      return '90%';
    } else {
      return value + '%';
    }
  }
}
