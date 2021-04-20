import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  isUserLogged: boolean = false;


  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
    console.log(this.appService.isUserLogged);
    
    this.isUserLogged = this.appService.isUserLogged;
  }
}
