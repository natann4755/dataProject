import { Component, OnInit } from '@angular/core';
import { User } from '../../../class/user';
import { UserService } from '../../../servises/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[]=[]

  constructor(public svsuser:UserService) { }

  ngOnInit() {
    this.next()
  }

  next(){
    this.svsuser.getoll()
    .subscribe(data=> {this.users =data
    console.log(this.users.length)
    })
  }
}
