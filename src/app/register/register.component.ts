import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../servicios/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder, private authentication: AuthenticationService, private ruta: Router) {

    this.formRegistro = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
    });


  }


  ngOnInit(): void {
  }


  get Nombre() {
    return this.formRegistro.get('nombre');
  }

  get Email() {
    return this.formRegistro.get('email');

  }

  get NombreUsuario() {
    return this.formRegistro.get('nombreUsuario');
  }

  get PasswordRegistro() {
    return this.formRegistro.get('password');
  }
 

  mensaje: string = "";
  registroAndLogin() {
    if (this.formRegistro.valid) {
      this.authentication.Registro(this.formRegistro.value).subscribe(data => {
        this.authentication.login(this.formRegistro.value).subscribe(data => {
          this.ruta.navigate(['/porfolio']);
        });
      }, (err => {
        this.mensaje = err.error.mensaje;
      }));
    }
  }
}



