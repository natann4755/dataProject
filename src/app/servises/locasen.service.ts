import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocasenService {

  locesenclas:string='login'
//  username:string
  user:string
  constructor() {
    console.log(this.locesenclas);
   }

  getLocClas(clas:string):void{
    this.locesenclas=clas
    console.log(this.locesenclas);
  }
}
