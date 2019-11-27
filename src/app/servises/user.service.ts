import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[]
  myuser:User
  dd:number
  private api = 'https://jsonplaceholder.typicode.com/users'

  constructor(public Http:HttpClient) {
   }

   getoll():Observable<User[]>{
     return this.Http.get<User[]>(this.api)
   }

   getmyuser(num:number):Observable<User>{
     let apii = this.api+`?id=${num}` 
     return this.Http.get<User>(apii) 
   }
}
