import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url_login = "/api/login";
  url_registro = "/api/register";
  currenUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("LoginService");
    this.currenUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));

  }

  login(credenciales:any):Observable<any>{
    return this.http.post(this.url_login,credenciales).pipe(map(user=>{
      if(user){
        console.log(user);
        sessionStorage.setItem('currentUser',JSON.stringify(user));
        localStorage.setItem('currentUser',JSON.stringify(user));
        this.currenUserSubject.next(user);
        
      }
      return user;
    }));
    
  }

  get UsuarioAutenticado(){
    return this.currenUserSubject.value;
  }


  Registro(credenciales:any):Observable<any>{
    return this.http.post(this.url_registro,credenciales);


  }

  Logout() {
    window.sessionStorage.clear();
  }



}
