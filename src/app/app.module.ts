import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './comps/pages/login/login.component';
import { HomepageComponent } from './comps/pages/homepage/homepage.component';
import { AlbomComponent } from './comps/pages/albom/albom.component';
import { TodoComponent } from './comps/pages/todo/todo.component';
import { PostComponent } from './comps/pages/post/post.component';
import { UserComponent } from './comps/pages/user/user.component';
import { ComentComponent } from './comps/pages/coment/coment.component';
import { HederComponent } from './comps/ganerl/heder/heder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AlbomComponent,
    TodoComponent,
    PostComponent,
    UserComponent,
    ComentComponent,
    HederComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
