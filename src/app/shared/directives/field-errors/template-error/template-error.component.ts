import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-error',
  templateUrl: './template-error.component.html',
  styleUrls: ['./template-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateErrorComponent implements OnInit {

  errorMessage?: string;
  hidden: boolean = true;

  @Input()
  set text(value: any) {
    if (value !== this.errorMessage) {
      this.errorMessage = value;
      this.hidden = !value;
      this.cdr.detectChanges();
    }
  }

  constructor(
    private cdr: ChangeDetectorRef
  ) { this.errorMessage = '';}

  ngOnInit(): void {
  }

}
