import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styles: [
  ]
})
export class AdministrationComponent implements OnInit {

  user: string = 'Roberth';
  posts: Post[] = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    const authenticatedUser = localStorage.getItem('user');
    if (authenticatedUser) {
      this.user = authenticatedUser;
    }
    this.appService.getLatestsPosts().subscribe( posts => {
      this.posts = posts;
    });
  }

}
