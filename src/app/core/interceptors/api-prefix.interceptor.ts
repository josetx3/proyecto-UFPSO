import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  private excludedURLs: string[] = [
    'accounts.google.com',
    'www.googleapis.com'
    // Add more allowed URLs here as needed
  ];

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.isURLAllowed(request.url)) {
      return next.handle(request);
    }

    const urlRequest = request.clone({
      url: environment.api + request.url
    });
    return next.handle(urlRequest);
  }

  private isURLAllowed(url: string): boolean {
    return this.excludedURLs.some(allowed => url.includes(allowed));
  }
}
