import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pagina/header/header.component';
import { AboutForMyComponent } from './pagina/about-for-my/about-for-my.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { InterceptorService } from './servicios/interceptor.service';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutForMyComponent,
    PorfolioComponent,
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: InterceptorService,multi: true}
    ],


  bootstrap: [AppComponent]
})
export class AppModule { }
