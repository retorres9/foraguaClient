import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Post } from '../../interfaces/post.interface';
import * as moment from 'moment';
import { Mail } from './interface/mail.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  alert: boolean = false;
  mail: Mail = {
    name: '',
    from: '',
    text: ''
  };

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getLatestsPosts().subscribe( resp => {
      this.posts = resp;
    });
  }

  toPost(id: string) {
    console.log(id);
  }

  async sendMail() {
    await this.appService.sendMail(this.mail).subscribe(
      resp => {
        if (resp.rejected.length !== 0) {
          console.log('error');
        } else {
          this.mail.from = '';
          this.mail.name = '';
          this.mail.text = '';
          this.alert = true;
          setTimeout(() => {
            this.alert = false;
          }, 3000);
        }
      }
    );
  }

}
