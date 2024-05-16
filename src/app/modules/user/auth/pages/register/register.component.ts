import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoadingService} from "@app/core/services/loading.service";
import {AuthService} from "@app/core/services/auth.service";
import {AlertService} from "@app/core/services/alert.service";
import {Router} from "@angular/router";
import {Select} from "@app/core/interfaces/select.interface";
import {SelectService} from "@app/core/services/select.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public documentType: any;
  public formRegisterUser: FormGroup = new FormGroup<any>({});
  dateNow: Date = new Date();

  constructor(
    private _router: Router,
    private dialog: MatDialog,
    private _auth: AuthService,
    private _alert: AlertService,
    private _loader: LoadingService,
    private _select: SelectService
  ) {
  }

  ngOnInit() {
    this.dialog.closeAll();
      this.initFormRegister();
      this.getDocumentType();
  }

  getDocumentType(): void {
    this._select.getDocumentTypes().subscribe({
      next: (data: any) => {
        this.documentType = data;
      }
    })
  }

  initFormRegister(): void {
    this.formRegisterUser = new FormGroup({
      data_user: new FormGroup({
        user_name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
        img_profile: new FormControl(''),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
        confirmation_password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
      }),
      data_person: new FormGroup({
        person_name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
        lastname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
        email: new FormControl('', [Validators.required, Validators.minLength(4)]),
        direction: new FormControl('', [Validators.required, Validators.minLength(4)]),
        document_type: new FormControl('', [Validators.required]),
        document_number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),
        phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),
        birthdate: new FormControl('', [Validators.required]),
      })
    })
  }

  sendRegistrate(): void {
    if (this.formRegisterUser.valid) {
      this._loader.show();
      const dataRegister: any = {
        user_name: this.formRegisterUser?.get('data_user')?.get('user_name')?.value,
        img_profile: this.formRegisterUser?.get('data_user')?.get('img_profile')?.value,
        password: this.formRegisterUser?.get('data_user')?.get('password')?.value,
        confirmation_password: this.formRegisterUser?.get('data_user')?.get('confirmation_password')?.value,
        person: {
          person_name: this.formRegisterUser?.get('data_person')?.get('person_name')?.value,
          lastname: this.formRegisterUser?.get('data_person')?.get('lastname')?.value,
          email: this.formRegisterUser?.get('data_person')?.get('email')?.value,
          direction: this.formRegisterUser?.get('data_person')?.get('direction')?.value,
          document_type: this.formRegisterUser?.get('data_person')?.get('document_type')?.value,
          document_number: this.formRegisterUser?.get('data_person')?.get('document_number')?.value,
          phone: this.formRegisterUser?.get('data_person')?.get('phone')?.value,
          birthdate: this.formRegisterUser?.get('data_person')?.get('birthdate')?.value,
        }
      }
      this._auth.sigIn(dataRegister).subscribe({
        next: () => {
          this._loader.hide();
          this._alert.success('Usuario registrado exitosamente');
          this._router.navigate(['/'])
        },
        error: (error) => {
          console.error(error.error.message)
          this._alert.error('¡Oops! Parece que hubo un problema al intentar completar tu registro. Por favor, inténtalo nuevamente.');
          this._loader.hide();
          this._router.navigate(['/'])
        }
      })
    } else {
      this._alert.warning('Ingresa todos los campos');
    }
  }

  changeDocument(_event: Select): void {
    const validators = [Validators.required, Validators.maxLength(15)];
    this.formRegisterUser?.get('document_number')?.reset();
    this.formRegisterUser?.get('document_number')?.setValidators(validators);
    this.formRegisterUser?.get('document_number')?.updateValueAndValidity();
  }


}
