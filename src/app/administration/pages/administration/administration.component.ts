import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private appService: AppService, private router: Router) { }

  
  get auth() {
    return this.appService.user.username;
  }
  

  ngOnInit(): void {
    this.appService.getLatestsPosts().subscribe( posts => {
      this.posts = posts;
    });
  }

  logout() {
    this.appService.logout();
    this.router.navigate(['/'])
  }

}
