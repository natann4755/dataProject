import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myComment } from '../class/comment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentService {

  api = "https://jsonplaceholder.typicode.com/comments"

  constructor(public Http:HttpClient) { }

  getcommentPosts(postnam:number[]):Observable<myComment[]>{
    let apii=this.api+"?"

    for (let i = 0; i <postnam.length; i++) {
      apii+=`postId=${postnam[i]}&`
    }
   return this.Http.get<myComment[]>(apii)
  }

}
