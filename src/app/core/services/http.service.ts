import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from '@angular/common/http';
import {DOCUMENT} from '@angular/common';
import {HttpOptions} from '@app/core/interfaces/http-options.interface';
import {CLEAR_AUTHORIZATION} from '@app/core/interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) document: any
  ) {
  }

  public get<T>(url: string, clearAuthorization: boolean = false, httpOptions?: HttpOptions): Observable<T> {
    const options = this.createHttpOptions(clearAuthorization, httpOptions);
    return this.http.get<T>(url, options);
  }

  public post<T, R>(url: string, body: T, clearAuthorization: boolean = false, httpOptions?: HttpOptions): Observable<R> {
    const options = this.createHttpOptions(clearAuthorization, httpOptions);
    return this.http.post<R>(url, body, options);
  }

  public put<T, R>(url: string, body: T, clearAuthorization: boolean = false, httpOptions?: HttpOptions): Observable<R> {
    const options = this.createHttpOptions(clearAuthorization, httpOptions);
    return this.http.put<R>(url, body, options);
  }

  public delete<R>(url: string, clearAuthorization: boolean = false, httpOptions?: HttpOptions): Observable<R> {
    const options = this.createHttpOptions(clearAuthorization, httpOptions);
    return this.http.delete<R>(url, options);
  }

  private createHttpOptions(clearAuthorization: boolean, httpOptions?: HttpOptions): HttpOptions {
    const defaultOptions: HttpOptions = this.createDefaultOptions(clearAuthorization);
    if (httpOptions) {
      httpOptions = {
        params: httpOptions.params ?? defaultOptions.params,
        headers: httpOptions.headers ?? defaultOptions.headers
      }

      if (!httpOptions.headers?.get('Content-Type')) {
        // @ts-ignore
        httpOptions.headers = httpOptions.headers?.set('Content-Type', defaultOptions.headers?.get('Content-Type'))
      }
    }
    return httpOptions ?? defaultOptions;
  }

  public createDefaultOptions(clearAuthorization: boolean): HttpOptions {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': document.location.origin,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      }),
      context: new HttpContext().set(CLEAR_AUTHORIZATION, clearAuthorization),
      withCredentials: true,
    }
  }

  public addParams(params: HttpParams): HttpOptions {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': document.location.origin,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      }),
      params: params,
      withCredentials: true,
    }
  }
}
