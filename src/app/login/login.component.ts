import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authentication: AuthenticationService, private ruta: Router) {
    this.form = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }


  ngOnInit(): void {

  }

  get Username() {
    return this.form.get('nombreUsuario');
  }

  get Password() {
    return this.form.get('password');
  }

  mensajeLogin: string = "";
  onLogin(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value);
      this.authentication.login(this.form.value).subscribe(data => {
          this.ruta.navigate(['/porfolio']);
      }, (err => {
        this.mensajeLogin = err.error.mensaje;
        if (this.mensajeLogin != "el usuario no existe") {
          this.mensajeLogin = "contraseña incorrecta";
        }
      }));
    }
  }

}
