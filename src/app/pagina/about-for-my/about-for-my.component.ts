import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/servicios/about.service';


@Component({
  selector: 'app-about-for-my',
  templateUrl: './about-for-my.component.html',
  styleUrls: ['./about-for-my.component.css']
  
})
export class AboutForMyComponent implements OnInit {

  about:any
  constructor(private aboutService:AboutService ) { }

 
  ngOnInit(): void {
    this.getAbout();
  }



  getAbout():void{
    this.aboutService.getAbout().subscribe(data=>{
      this.about=data;
      console.log(this.about);
     
    });
  }
  borrar(id:number){
    this.aboutService.delete(id).subscribe(data=>{
      console.log("se elimino " +data);
      this.getAbout();


    });
  
  }
    
 

}
