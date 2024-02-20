import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
  production: false,

  /* --- Url backend ---- */
  api: 'https://backendufpso.azurewebsites.net/app/',

  /* --- Logs ---- */
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.OFF,

  //reCAPTCHA
  recaptcha: {
    // siteKey: '6LdOK3coAAAAAFOLlbcStzivblCpBlOpBZ8JHcPQ',
  },

  environment: {
    // accessKey: 'AKIAZNMUO5DBYPS4ZR2W',
    // secretKey: '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',
    // region: 'us-east-1',
    // bucket: 'bucketwposs'
  },

  google: {
    // client_id: '142762523331-n2e4urvo9mn1efih9jb59g05m7k1h4qe.apps.googleusercontent.com'
  }
}
