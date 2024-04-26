import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CodeInputComponent} from "angular-code-input";
import {MatDialog} from "@angular/material/dialog";
import {AlertService} from "@app/core/services/alert.service";
import {AuthService} from "@app/core/services/auth.service";
import {StorageService} from "@app/core/services/storage.service";
import {LoadingService} from "@app/core/services/loading.service";

@Component({
  selector: 'app-multi-factor-auth',
  templateUrl: './multi-factor-auth.component.html',
  styleUrls: ['./multi-factor-auth.component.scss']
})
export class MultiFactorAuthComponent implements OnInit, OnDestroy {

  @ViewChild('codeInput') codeInput!: CodeInputComponent;
  codeValid: boolean = false;
  value: number = 100;
  interval: any;

  user?: any;
  mfaEmail!: boolean;
  email: string = '';
  setTimeout: any;
  private code: string = '';
  private pathCommerce: string | null = '';

  constructor(
    public dialog: MatDialog,
    private _auth: AuthService,
    private _alert: AlertService,
    private _loader: LoadingService,
    private _storage: StorageService
  ) {
    this.pathCommerce = this._storage.getItem('path_commerce');
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.value -= 0.333;
    }, 1000);

    this.user = this._storage.getItem<any>('user_login');
    this.mfaEmail = this.user.mfa_is_email;
    this.email = this.user.email;

    this.setTimeout = setTimeout(() => {
      this.dialog.closeAll();
      this._alert.error('¡Tiempo expirado!. Vuelva a autenticarse.');
      this._storage.removeItem('user_login');
    }, 300000);
  }


  onCodeCompleted(codeCompleted: string) {
    this.code = codeCompleted;
    this.codeValid = true;
  }

  public sendCode(): void {
    this._loader.show();
    this.codeInput.reset();
    this.codeInput.focusOnField(0);
    const data: any = {
      user_id: this.user?.user_id,
      code: this.code
    }

    this._auth.sendMultiFactorAuthentication(data).subscribe({
      next: (data) => {
        this.destroyModal();
        this._auth.signedInSuccessfully(data);
        this._loader.hide();
        // location.reload();
      }, error: () => {
        this.codeValid = false;
      }
    });
  }

  resendCode(): void {

  }

  destroyModal(): void {
    this.dialog.closeAll();
    clearInterval(this.interval);
    clearTimeout(this.setTimeout);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    clearTimeout(this.setTimeout);
  }

}
