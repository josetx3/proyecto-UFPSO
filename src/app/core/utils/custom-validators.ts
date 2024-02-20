import {AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {isPresent} from "@app/core/utils/lang";
// import {UserService} from "@app/modules/administration/modules/user/services/user.service";
// import {catchError, map, of, switchMap, timer} from "rxjs";
// import {BranchOfficesService} from "@app/modules/administration/modules/settings/services/branch-offices.service";


export class CustomValidators {

  /**
   * @Returns Valida la expresión para contraseñas
   * @param pattern
   * @param error
   */
  static pattern(pattern: RegExp, error: ValidationErrors): ValidatorFn {
    return patternValidator(pattern, error);
  }

  static confirmPassword(control: AbstractControl): ValidationErrors | null {
    return confirmPasswordValidator(control);
  }

  static documentCC(control: AbstractControl): ValidationErrors | null {
    return documentCC(control);
  }
}

export function patternValidator(pattern: RegExp, error: ValidationErrors): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (isPresent(Validators.required(control))) {
      return null;
    }

    return pattern.test(control.value) ? null : error;
  };
}

export function confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.parent?.get('password')?.value;
  const passwordConfirmed = control.value;
  if (!passwordConfirmed) {
    return null;
  }
  return password !== passwordConfirmed ? {confirmPassword: true} : null;
}

export function documentCC(control: AbstractControl): ValidationErrors | null {
  const document: string = control.value;
  let flagDocument = true;

  if (document.length != 10) {
    flagDocument = false;
  }

  return flagDocument ? null : {documentCC: true};
}

// export function existUserName(_userService: UserService, editingNameUser: string | null = null, debounce = 300): AsyncValidatorFn {
//   return (control: AbstractControl) => {
//     const username = control.value;
//
//     if (username == editingNameUser) {
//       return of(null);
//     }
//
//     return timer(debounce).pipe(
//       switchMap(() => _userService.existUserByName(username)),
//       map(userExists => (userExists ? {usernameExists: true} : null)),
//       catchError(() => of(null))
//     );
//   };
// }
//
// export function existDocumentNumber(_userService: UserService, editingDocumentNumber: string | null = null, debounce = 300): AsyncValidatorFn {
//   return (control: AbstractControl) => {
//     const documentNumber = control.value;
//
//     if (documentNumber == editingDocumentNumber) {
//       return of(null);
//     }
//
//     return timer(debounce).pipe(
//       switchMap(() => _userService.existUserByDocument(documentNumber)),
//       map(documentNumberExists => (documentNumberExists ? {documentNumberExists: true} : null)),
//       catchError(() => of(null))
//     );
//   };
// }
//
// export function existPersonEmail(_userService: UserService, editingPersonEmail: string | null = null, debounce = 300): AsyncValidatorFn {
//   return (control: AbstractControl) => {
//     const personEmail = control.value;
//
//     if (personEmail == editingPersonEmail) {
//       return of(null);
//     }
//
//     return timer(debounce).pipe(
//       switchMap(() => _userService.existPersonEmail(personEmail)),
//       map(personEmailExists => (personEmailExists ? {personEmailExists: true} : null)),
//       catchError(() => of(null))
//     );
//   };
// }
//
// export function existEmailBranch(_branchOfficesService: BranchOfficesService, editingBranchOfficesEmail: string | null = null, debounce = 300): AsyncValidatorFn {
//   return (control: AbstractControl) => {
//     const BranchEmail = control.value;
//     if (BranchEmail == editingBranchOfficesEmail) {
//       return of(null);
//     }
//     return timer(debounce).pipe(
//       switchMap(() => _branchOfficesService.existBranchEmail(BranchEmail)),
//       map(branchEmailExist => (branchEmailExist ? {branchEmailExists: true} : null)),
//       catchError(() => of(null))
//     );
//   }
// }
//
// export function existUserNameBranch(_branchOfficesService: BranchOfficesService, editingBranchOfficesName: string | null = null, debounce = 300): AsyncValidatorFn {
//   return (control: AbstractControl) => {
//     const nameBranch = control.value;
//
//     if (nameBranch == editingBranchOfficesName) {
//       return of(null);
//     }
//
//     return timer(debounce).pipe(
//       switchMap(() => _branchOfficesService.existBranchName(nameBranch)),
//       map(userExists => (userExists ? {branchNameExists: true} : null)),
//       catchError(() => of(null))
//     );
//   };
// }
