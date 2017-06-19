import { Component } from '@angular/core';
import {PostsService} from './posts.service';
import {Post} from './post';
import {User} from './user';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostsService]


})
export class AppComponent {
  private posts:Post[] = [];
  private users: User[] = [];
   private errorMessage:any = '';
  constructor(private _postService: PostsService){
    // this.getPosts();
    this.getUsers();
  }
  getPosts(){
    this._postService.getData()
    .subscribe(posts => this.posts = posts,
    error => this.errorMessage = <any> error);

    console.log(this.posts);
  }
  getUsers(){
    this._postService.getUserData()
    .subscribe(users =>{
       this.users = users;
       console.log(users);
    },
    error =>{
      console.log(error);
    });

  }
  loadMore(id){
    console.log("Clicked:"+id);
  }

}
