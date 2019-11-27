import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { LocasenService } from '../../../servises/locasen.service';
import { UserService } from '../../../servises/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  pass:number= 10
  user:string="natan"

  constructor(public svsloc:LocasenService, public svsuser:UserService) { }

  ngOnInit() {
    // setTimeout(()=>{this.logiin()},6000)
  }

  logiin(){
    
    this.connect(this['user'],this['pass'])
       .subscribe(t=>{console.log(t)
   
       

        let numUser= Math.floor((Math.random() * 10) + 1);
        console.log("random",numUser);
        
        this.svsuser.getmyuser(numUser)
        .subscribe(data=>{
          
          this.svsuser.myuser=data;
          
          this.svsloc.locesenclas='homepage'
          this.svsloc.user=this.svsuser.myuser[0].name
          console.log(this.svsuser.dd);
          
          console.log("my user is",this.svsuser.myuser);
          
        })  
     }
     )
   }
     connect(user:string,pass:number):Observable<number>{
       return timer(50)
     }
    
  }

  


