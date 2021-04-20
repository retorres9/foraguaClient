import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './interfaces/post.interface';
import { CreateUser } from './auth/interfaces/create-user.interface';
import { AuthUser } from './auth/interfaces/auth-user.interface';
import { tap } from 'rxjs/operators';
import { MailSentDto } from './home/home/interface/mails-response';
import { Mail } from './home/home/interface/mail.dto';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _authUser: AuthUser | undefined;
  isUserLogged: boolean = false;
  get user() {
    return {...this._authUser}
  }
  
  
  constructor(private http: HttpClient) { }
  // POSTS

  getLatestsPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts/latests');
  }
  getPost(id): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/posts/${id}`);
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

  login(authUser: AuthUser): Observable<any> {
    return this.http.post<AuthUser>('http://localhost:3000/auth/login', authUser).pipe(
      tap(auth => this._authUser = auth),
      tap(auth => localStorage.setItem('user', this._authUser.username)),
      tap(auth => this.isUserLogged = true)
    );
  }

  logout() {
    localStorage.removeItem('user');
    this._authUser = undefined;
  }

  // MAIL

  sendMail(mail: Mail): Observable<MailSentDto> {
    return this.http.post<MailSentDto>('http://localhost:3000/mailer', mail);
  }
}
