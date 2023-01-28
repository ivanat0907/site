import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
/*aaaa*/
  constructor(private router: Router) {
    
  }
  gotoAbout() {
    this.router.navigate(['about']);
  }
}

