import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../../class/post';
import { PostService } from '../../../servises/post.service';
import { PotosService } from '../../../servises/potos.service';
import { Photos } from '../../../class/photos';
import { ComentService } from '../../../servises/coment.service';
import { myComment } from '../../../class/comment';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  
  tenPhotos:Photos[]=[]
  tenposts:Post[]=[]
  // mmycomments:myComment[]=[]
  index = 0
  maxindex = 9
  numberofinterval:number

  constructor(public svspost:PostService, public svspotos:PotosService,public svsmycom:ComentService) {
    // setTimeout (()=>{this.move()},0)
    this.set()
   }

  

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
    clearInterval (this.numberofinterval)
  }
  ngOnInit() {
    this.svspotos.getten()
    .subscribe(dataa=>{this.tenPhotos=dataa
    console.log(dataa)
    })
   

    this.svspost.getten()
    .subscribe(data=>{
      this.tenposts=data
      let idpost:number[] = data.map(ids=>ids.id)
      console.log("hhhh",idpost)
      this.svsmycom.getcommentPosts(idpost)
      .subscribe(commen=>{
        console.log("llll",commen[0].body);
        this.tenposts.forEach(post=>{ 
        post.ccomment=
        commen.filter(com=>{
          com.postId==post.id
          //  console.log("rrrrrrrrr",this.tenposts[0].ccomment[1])
           
        })
        })
      })
    })
      
  }



  move(){
   
    let oan = document.querySelectorAll(".li1")[this.index]
    console.log("oan.className",oan.className)
     oan.className="li1"
     console.log("oan.className",oan.className)

     if (this.index==9){
       this.index=-1
     }

    let to = document.querySelectorAll(".li1")[++this.index]
    to.className="li1 shoo"
  }

  set(){
    this.numberofinterval =window.setInterval(()=>{this.move()},3000)
  }
}
