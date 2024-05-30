export const enum EndPoints {

  //SELECT-SERVICE
  DOCUMENT_TYPE = 'security/document_type/',

  LOGIN = 'security/authentication/login',
  SIG_IN = 'security/user/',
  TOKEN_REFRESH = 'security/authentication/refresh_token',
  VALIDATE_CODE = 'security/authentication/mfa',
  CSRF_TOKEN = '',

  //SILLAS
  GET_CHAIRS = 'security/place_to_sit/',
  GET_CHAIR_ID = 'security/place_to_sit/',

  //MOVIES
  GET_ALL_MOVIES = 'security/movie/all',
  GET_GENDER_MOVIE = 'security/gender/',
  GET_LANGUAGE_MOVIE = 'security/language/',
  GET_COUNTRY_MOVIE = 'security/country/',
  MOVIE = 'security/movie/',
  MOVIE_SCHEDULE = 'security/movie_schedule/',
  GET_MOVIE_SCHEDULE = 'security/movie_schedule/',
  GET_MOVIE_INFO_BASIC = 'security/movie/info_basic',
  UPDATE_HOME_MOVIE = 'security/movie/update_home/',

  //FOOD
  FOOD = 'security/food/',
  GET_ALL_FOOD = 'security/food/',
  GET_TYPE_FOOD = 'security/type_food/',
  GET_FOOD = 'security/food/all',
  GET_VARIANT_FOOD = 'security/variant_food/',
  GET_FOOD_SALE = 'security/food/sale',

  //COMBOS
  GET_COMBOS = 'security/combo/',
  COMBO = 'security/combo/',

  //CHECKOUT
  CHECKOUT = 'security/checkout/',
  CHECKOUT_ORDERS = 'security/checkout/orders',
}
