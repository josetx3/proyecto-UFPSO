import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowPassword]'
})
export class ShowPasswordDirective {

  element = this.el.nativeElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  @HostListener('click', [ '$event.target' ])
  onClick() {
    if (this.element.parentElement.children[1].type === 'text') {
      this.renderer.setAttribute(this.element.parentElement.children[1], 'type', 'password');
      this.renderer.removeClass(this.element.children[0], 'icon-eye')
      this.renderer.addClass(this.element.children[0], 'icon-eye-close');
    } else {
      this.renderer.setAttribute(this.element.parentElement.children[1], 'type', 'text');
      this.renderer.removeClass(this.element.children[0], 'icon-eye-close')
      this.renderer.addClass(this.element.children[0], 'icon-eye')
    }
  }

}
