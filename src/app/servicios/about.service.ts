import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  
  url = ('api/about/');
  
  constructor(private httpClient:HttpClient) { 

  }

  public getAbout():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url);
  }

  public saveAbout(about:About):Observable<any>{
    return this.httpClient.post<About>(this.url+"new",about);

  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url+"delete/"+id);
  }

  public updateAbout(id: number, about:About):Observable<any>{
    return this.httpClient.put<any>(this.url+`update/${id}`,about);
  }

}
