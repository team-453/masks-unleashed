import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptiiiiing', environment.apiBaseUrl);
    const baseUrl = environment.apiBaseUrl;
    const apiReq = req.clone({url: `${baseUrl}${req.url}`});
    return next.handle(apiReq);
  }
}
