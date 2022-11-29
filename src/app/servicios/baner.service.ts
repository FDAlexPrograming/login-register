import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Baner } from '../models/baner';

@Injectable({
  providedIn: 'root'
})
export class BanerService {
  
  url = ('api/baner/');
  
  constructor(private httpClient:HttpClient) { 

  }


  public getBaner():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url);
  }

  
  public saveBaner(baner:Baner):Observable<any>{
    return this.httpClient.post<Baner>(this.url+"new",baner);

  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url+"delete/"+id);
  }

  public updateBaner(id: number, baner:Baner):Observable<any>{
    return this.httpClient.put<any>(this.url+`update/${id}`,baner);
  }

 



}
