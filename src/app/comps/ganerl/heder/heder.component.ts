import { Component, OnInit } from '@angular/core';
import { LocasenService } from '../../../servises/locasen.service';
import { toASCII } from 'punycode';
import { UserService } from '../../../servises/user.service';

@Component({
  selector: 'p-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {

  user:string=""
  constructor(public loc:LocasenService, public svsuser:UserService ) {
    this.user=this.loc.user
    console.log("yyyyyyyyy",this.user)
    
   }

  ngOnInit() {
    
  }

}
