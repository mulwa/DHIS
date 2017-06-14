import { Component } from '@angular/core';
import {PostsService} from './posts.service';
import {Post} from './post';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostsService]


})
export class AppComponent {
  private posts:Post[] = [];
   private errorMessage:any = '';
  constructor(private _postService: PostsService){
    this.getPosts();
  }
  getPosts(){
    this._postService.getData()
    .subscribe(posts => this.posts = posts,
    error => this.errorMessage = <any> error);

    console.log(this.posts);

  }

}
