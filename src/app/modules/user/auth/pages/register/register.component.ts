import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoadingService} from "@app/core/services/loading.service";
import {AuthService} from "@app/core/services/auth.service";
import {AlertService} from "@app/core/services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public formRegisterUser: FormGroup = new FormGroup<any>({});
  dateNow: Date = new Date();

  constructor(
    private _router: Router,
    private dialog: MatDialog,
    private _auth: AuthService,
    private _alert: AlertService,
    private _loader: LoadingService,
  ) {
  }

  ngOnInit() {
    this.dialog.closeAll();
    this.initFormRegister();
  }

  initFormRegister()
    :
    void {
    this.formRegisterUser = new FormGroup({
      data_user: new FormGroup({
        user_name: new FormControl('', [Validators.required]),
        img_profile: new FormControl(''),
        password: new FormControl('', [Validators.required]),
        confirmation_password: new FormControl('', [Validators.required]),
      }),
      data_person: new FormGroup({
        person_name: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        direction: new FormControl('', [Validators.required]),
        document_type: new FormControl('', [Validators.required]),
        document_number: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
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
        // document_type: this.formRegisterUser?.get('data_person')?.get('document_type')?.value,
        document_type: '78f8805e-4000-4e9e-a770-4e3704d27b72',
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
    }
  }


}
