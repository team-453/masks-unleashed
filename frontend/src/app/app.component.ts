import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isRecyclerView = false;
  isCollectorView = false;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isRecyclerView = event.url.startsWith('/recycler');
        this.isCollectorView = event.url.startsWith('/collector');
      }
    });
  }

  logout() {
    this.router.navigate(['/']);
  }
}
