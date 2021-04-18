import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Post } from '../../../interfaces/post.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styles: [
  ]
})
export class PostsListComponent implements OnInit {

  user: string = 'Roberth';
  posts: Post[] = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getLatestsPosts().subscribe( posts => {
      this.posts = posts;
    });
  }
}
