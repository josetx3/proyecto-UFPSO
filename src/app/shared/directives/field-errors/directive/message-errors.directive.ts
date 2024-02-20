import {ComponentRef, Directive, Renderer2, ViewContainerRef} from '@angular/core';
import {AbstractControl, NgControl} from "@angular/forms";
import {merge, Subscription} from "rxjs";
import {ListErrors} from "@app/shared/directives/field-errors/errors-interface/list-errors";
import {TemplateErrorComponent} from "@app/shared/directives/field-errors/template-error/template-error.component";

@Directive({
  selector: '[appValidateErrors]'
})
export class MessageErrorsDirective {
  private status: Subscription = new Subscription;
  private errors: any = ListErrors;
  private component!: ComponentRef<TemplateErrorComponent>;

  constructor(
    private renderer: Renderer2,
    private control: NgControl,
    private vcr: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    this.listenState();
  }

  ngAfterViewChecked(): void {
    this.validateErrors();
  }

  private get formControl(): AbstractControl | null {
    return this.control.control;
  }

  listenState(): void {
    this.status = merge(this.formControl?.valueChanges).subscribe(
      () => this.validateErrors()
    );
  }

  private validateErrors(): void {
    try {
      if (this.formControl?.invalid && this.validateInitialState) {
        if (this.formControl.errors) {
          const firstValue = Object.keys(this.formControl.errors)[0];
          const getError = this.errors[firstValue];
          const message = getError(this.formControl.errors[firstValue]);
          this.renderInScreen(message);
          this.addClassError(true);
        }
      } else {
        this.renderInScreen();
        this.addClassError(false);
      }
    } catch (e) {
    }
  }

  private renderInScreen(message?: string): void {
    try {
      if (!this.component) {
        this.component = this.vcr.createComponent(TemplateErrorComponent);
      }
      this.component.instance.text = message;
    } catch (e) {
    }
  }

  private addClassError(className: boolean): void {
    if (this.component) {
      const element = this.vcr.element.nativeElement;
      if (className) {
        this.renderer.addClass(element, 'input-error');
      } else {
        this.renderer.removeClass(element, 'input-error');
      }
    }
  }

  public get validateInitialState(): boolean {
    if (this.formControl) {
      return this.formControl.touched || this.formControl.dirty;
    }
    return false;
  }

  ngOnDestroy(): void {
    this.status.unsubscribe();
  }


}
