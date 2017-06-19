import { Injectable } from '@angular/core';
import {Post} from './post';
import{User} from './user';
import {Http , Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http : Http) { }
  getData():Observable<Post[]> {
        return this.http.get('http://jsonplaceholder.typicode.com/posts/')
            .map(res=> res.json())
            .catch(this.handleError);
    }
    getUserData():Observable<User[]>{
      return this.http.get('https://jsonplaceholder.typicode.com/users').map(res =>res.json())
      .catch(this.handleError);

    }


    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
