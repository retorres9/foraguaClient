import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }
  year: number = new Date().getFullYear();

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['auth/login']);
  }

}
