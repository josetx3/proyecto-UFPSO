export const enum EndPoints {

  //SELECT-SERVICE
  DOCUMENT_TYPE = 'security/document_type/',

  LOGIN = 'security/authentication/login',
  SIG_IN= 'security/user/',
  TOKEN_REFRESH = 'security/authentication/refresh_token',
  VALIDATE_CODE = 'security/authentication/mfa',
  CSRF_TOKEN = '',

  //SILLAS
  GET_CHAIRS = 'security/place_to_sit/',

  //MOVIES
  GET_ALL_MOVIES = '',
  REGISTER_MOVIE = 'security/movie',
}
