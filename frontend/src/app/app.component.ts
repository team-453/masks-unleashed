import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    {
      path: 'user-dashboard',
      label: 'Customer',
    },
    {
      path: 'recycler-dashboard',
      label: 'Recycler',
    },
    {
      path: 'collection-point-dashboard',
      label: 'Collection Points',
    }
  ];

}
