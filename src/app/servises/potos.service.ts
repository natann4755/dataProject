import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photos } from '../class/photos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotosService {

  constructor(public Http:HttpClient) { }

  api='https://jsonplaceholder.typicode.com/photos'
  
  gettodo():Observable<Photos[]>{
    return this.Http.get<Photos[]>(this.api)
  }

  getten():Observable<Photos[]>{
    let apii=this.api+"?"
    for (let i = 4990; i <= 5000;i++){
      apii+=`id=${i}&`    
      // console.log(apii)
    }
    return this.Http.get<Photos[]>(apii)
  }
}

