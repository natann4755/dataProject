import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../class/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 
  api='https://jsonplaceholder.typicode.com/posts'
  constructor(public Http:HttpClient) { }

  getoll():Observable<Post[]>{
    return this.Http.get<Post[]>(this.api)
  }

  getten():Observable<Post[]>{
    let apii=this.api+"?"
    for (let i = 90; i <= 100;i++){
      apii+=`id=${i}&`    
    }
    return this.Http.get<Post[]>(apii)
  }
}