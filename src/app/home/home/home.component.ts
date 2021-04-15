import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getLatestsPosts().subscribe( resp => {
      this.posts = resp;
    });
  }

}
