import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-point-dashboard',
  templateUrl: './collection-point-dashboard.component.html',
  styleUrls: ['./collection-point-dashboard.component.scss']
})
export class CollectionPointDashboardComponent implements OnInit {

  constructor() { }

  navLinks = [
    {
      path: 'register',
      label: 'Register',
    },
    {
      path: 'cockpit',
      label: 'Cockpit',
    },
  ];

  ngOnInit(): void {
  }

}
