import { Component } from '@angular/core';
import { LocasenService } from './servises/locasen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data';
  constructor(public svsloc:LocasenService,){
   
  }
}
