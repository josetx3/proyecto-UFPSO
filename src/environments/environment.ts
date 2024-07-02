import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
  production: false,
  /* --- Url backend ---- */
  // api: 'https://backendufpso.azurewebsites.net/app/',
  api: 'http://localhost:8080/app/',

  /* --- Logs ---- */
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.OFF,

}
