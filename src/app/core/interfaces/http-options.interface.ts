import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  context?: HttpContext;
  withCredentials?: boolean;
}
