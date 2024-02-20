import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup = new FormGroup<any>({});

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.initFormLogin();
  }

  public initFormLogin(): void {
    this.formLogin = new FormGroup({
      user_name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      user_password: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });
  }

  public sendLogin(): void {
    alert('Hola')
  }

}
