import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  isUserLogged: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.isUserLogged = true;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

}
