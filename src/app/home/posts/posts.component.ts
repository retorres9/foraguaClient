import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { AppService } from '../../app.service';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [
    `
    img {
      height: 500px;
    }
    `
  ]
})
export class PostsComponent implements OnInit {

  post!: Post;
  constructor(private appService: AppService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.appService.getPost(id))
    ).subscribe( resp => {
      this.post = resp;
    });
  }

}
