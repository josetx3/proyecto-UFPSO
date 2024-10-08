import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {StorageService} from "@app/core/services/storage.service";
import {AuthService} from "@app/core/services/auth.service";
import {MultiFactorAuthComponent} from "@app/modules/user/auth/pages/multi-factor-auth/multi-factor-auth.component";
import {LoadingService} from "@app/core/services/loading.service";
import {AlertService} from "@app/core/services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup = new FormGroup<any>({});

  constructor(
    public dialog: MatDialog,
    private _auth: AuthService,
    private _alert: AlertService,
    private _loader: LoadingService,
    private _storage: StorageService
  ) {
  }

  ngOnInit(): void {
    this.initFormLogin();
  }

  public initFormLogin(): void {
    this.formLogin = new FormGroup({
      user_name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });
  }

  public sendLogin(): void {
    if (this.formLogin.valid) {
      this._loader.show();
      const authLogin: any = {
        user_name: this.formLogin.get('user_name')?.value,
        password: this.formLogin.get('password')?.value,
      }

      this._auth.login(authLogin).subscribe({
        next: (data): void => {
          this._loader.hide();
          this.formLogin.reset();
          this._storage.setItem('user_login', data)
          this.dialog.closeAll();
          this.dialog.open(MultiFactorAuthComponent, {
            width: '320px',
            height: '320px'
          })
        },
        error: (e): void => {
          console.error(e)
          this._loader.hide();
          this._alert.error('Error al intentar ingresar');
        }
      });
    } else {
      this.formLogin.markAllAsTouched();
      this._loader.hide();
    }
  }

}
