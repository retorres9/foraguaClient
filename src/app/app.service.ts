import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './interfaces/post.interface';
import { CreateUser } from './auth/interfaces/create-user.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  // POSTS

  getLatestsPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts/latests');
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts', post);
  }

  postImages(body: FormData): Observable<any> {
    return this.http.post('https://api.imgbb.com/1/upload?key=d4ef4b3fe6cfdc0752ce0b35bd9ab82d', body);
  }

  // AUTH

  signUp(user: CreateUser): Observable<CreateUser> {
    return this.http.post<CreateUser>('http://localhost:3000/auth/signup', user);
  }
}
