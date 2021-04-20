import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { AuthUser } from '../interfaces/auth-user.interface';
import { switchMap, tap } from 'rxjs/operators';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: AuthUser = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  }

  register() {
    this.router.navigate(['/auth/signup']);
  }

  login() {
    this.appService.login(this.user).subscribe(
      resp => {
        tap(this.user = resp)
        this.router.navigate(['administration'])
      }, error => {
        console.log(error);
        
      }
    );
  }

}
