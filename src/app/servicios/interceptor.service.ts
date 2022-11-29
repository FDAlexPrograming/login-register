import { Injectable } from '@angular/core';
import { HttpHandler,HttpEvent, HttpInterceptor,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authentication:AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var currentUser = this.authentication.UsuarioAutenticado;
    if(currentUser && currentUser.accessToken){
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.token}`
        }
      });
     
    }
    console.log("Interceptor corriendo" + JSON.stringify(req));
    return next.handle(req);

  }
}

