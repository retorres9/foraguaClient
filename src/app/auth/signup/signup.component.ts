import { Component, OnInit } from '@angular/core';
import { CreateUser } from '../interfaces/create-user.interface';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [

  ]
})
export class SignupComponent {

  constructor(private appService: AppService, private router: Router) { }

  user: CreateUser = {
    username: '',
    email: '',
    password: ''
  };

  signUp() {
    console.log(this.user);
    this.appService.signUp(this.user).subscribe( resp => {
      if (resp) {
        localStorage.setItem('user', resp.username);
        this.router.navigate(['administration/posts-list']);
      }
    })
  }
}
