import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../servises/todo.service';
import { Todo } from '../../../class/todo';
import { UserService } from '../../../servises/user.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo:Todo[]=[]
  constructor(public svstodo:TodoService, public svsUser:UserService) { }

  ngOnInit() {  
  }

  olltodo(){
    this.svstodo.gettodo()
    .subscribe(data=>this.todo=data)
    console.log(this.todo);
    
  }

  mytodo(){
    console.log("usser name is",this.svsUser.myuser[0].id);
    
    this.svstodo.getmytodos(this.svsUser.myuser[0].id)
    .subscribe(data=>this.todo=data)
  }

  selecttodo(){
    let user = document.querySelector('select').value
    console.log(user);    
    this.svstodo.getmytodos(+user)
    .subscribe(dat=> this.todo=dat)
    console.log("dat",this.todo);
    

  }
}
