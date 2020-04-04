import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recycler-dashboard',
  templateUrl: './recycler-dashboard.component.html',
  styleUrls: ['./recycler-dashboard.component.scss']
})
export class RecyclerDashboardComponent implements OnInit {
  constructor() {
  }

  navLinks = [
    {
      path: 'profile',
      label: 'Profile',
    },
    {
      path: 'orders',
      label: 'Orders',
    },
  ];


  ngOnInit(): void {
  }

}
