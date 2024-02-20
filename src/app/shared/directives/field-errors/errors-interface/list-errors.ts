export interface ListErrors {
  required: () => string;
  min: ({min}: any) => string;
  max: ({max}: any) => string;
  email: () => string;
  minlength: ({actualLength, requiredLength}: any) => string;
  maxlength: ({requiredLength, actualLength}: any) => string;
  equalLength: ({requiredLength, actualLength}: any) => string,
  confirmPassword: () => string,
  isAdult: () => string,
  documentCC: () => string,
  url: () => string,
  rangeLength: ({minLength, maxLength, actualLength}: any) => string,
  equalToLengths: ({lengths, actualLength}: any) => string
  binUntilMajor: () => string,
  equalLengthBin: () => string,
  emails: () => string,
  ruc: () => string,
  ip: () => string,
  dateMajor: () => string,
  usernameExists: () => string,
  documentNumberExists: () => string,
  personEmailExists: () => string,
  branchEmailExists: () => string,
  branchNameExists: () => string,
}


export const ListErrors: ListErrors = {
  required: () => 'El campo es requerido',
  min: ({min}): string => `Valor mínimo ${min}`,
  max: ({max}): string => `Valor máximo ${max}`,
  email: (): string => 'Este correo no es válido',
  minlength: ({
                requiredLength,
                actualLength
              }): string => `Mínimo <strong>${requiredLength}</strong> caracteres, actual <strong>${actualLength}</strong>`,
  maxlength: ({
                requiredLength,
                actualLength
              }): string => `Máximo <strong>${requiredLength}</strong> caracteres, actual <strong>${actualLength}</strong>`,
  equalLength: ({
                  requiredLength,
                  actualLength
                }): string => `El tamaño debe ser igual a <strong>${requiredLength}</strong> caracteres, actual <strong>${actualLength}</strong>`,
  confirmPassword: (): string => 'Las contraseñas no coinciden',
  isAdult: (): string => 'Debe ser mayor de edad',
  documentCC: (): string => 'El documento no es válido',
  url: (): string => 'La url no es válida',
  rangeLength: ({
                  minLength,
                  maxLength,
                  actualLength
                }): string => `Debe estar entre <strong>${minLength}</strong> caracteres y <strong>${maxLength}</strong> caracteres, actual <strong>${actualLength}</strong>`,
  equalToLengths: ({
                     lengths,
                     actualLength
                   }): string => `El tamaño debe ser igual <strong>${lengths}</strong> caracteres, actual <strong>${actualLength}</strong>`,
  equalLengthBin: (): string => 'El tamaño del rango de los bines no coinciden',
  binUntilMajor: (): string => 'El tamaño del rango del bin debe ser mayor',
  emails: (): string => 'Los correos no son válidos',
  ruc: (): string => 'El ruc no es valido',
  ip: (): string => 'La dirección ip no es válida',
  dateMajor: (): string => 'La fecha hasta debe ser mayor',
  usernameExists: (): string => 'El nombre de usuario ya existe',
  documentNumberExists: (): string => 'El numero de documento ya existe',
  personEmailExists: (): string => 'Esta direccion de correo electronico ya existe',
  branchEmailExists: (): string => 'Esta direccion de correo electronico ya está asociado a una sucursal',
  branchNameExists: (): string => 'El nombre de esta sucursal ya se encuentra registrado'
};
