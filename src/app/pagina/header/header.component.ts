import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { BanerService } from 'src/app/servicios/baner.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
 
   
constructor(private authentication: AuthenticationService, private ruta: Router, private banerService:BanerService) { 
  
}
  
  ngOnInit(): void {
  
    this.getBaner();
  }
  
  logo = "assets/img/APLogo1.png"
  num:number = 2;
  cambiarLogo(event:Event){
    event.preventDefault();
    console.log("cambiarLogo");
    if(this.num == 5){
      this.num = 1;}
    if (this.logo == 'assets/img/APLogo1.png'){
      this.logo = `assets/img/APLogo${this.num}.png`;
    }
    else{
      this.logo =  this.logo = `assets/img/APLogo${this.num}.png`;
    }
    this.num++;
    console.log(this.logo);
    return this.logo;
   
  }

  Logout(){
    
    console.log("logout");
    this.authentication.Logout();
    this.ruta.navigate(['/login']);
  }

  baner:any;

  getBaner():void{
    this.banerService.getBaner().subscribe(data => {
      this.baner = data;
      console.log(this.baner)
    });
  }
  
 

}
