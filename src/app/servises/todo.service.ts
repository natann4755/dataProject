import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../class/todo';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 
  api='https://jsonplaceholder.typicode.com/todos/'
  apii='https://jsonplaceholder.typicode.com/todos/?userId='

  constructor(public Http:HttpClient) { }
  
  gettodo():Observable<Todo[]>{
    return this.Http.get<Todo[]>(this.api)
  }

  getmytodos(numb:number):Observable<Todo[]>{
    console.log("pass",this.api+(numb.toString()));
    return this.Http.get<Todo[]>(this.apii+numb)
  }

}
