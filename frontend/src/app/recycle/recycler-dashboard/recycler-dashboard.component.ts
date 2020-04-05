import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recycler-dashboard',
  templateUrl: './recycler-dashboard.component.html',
  styleUrls: ['./recycler-dashboard.component.scss']
})
export class RecyclerDashboardComponent implements OnInit {
  name: string;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
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
    this.activatedRoute.paramMap.subscribe(params => {
      const recyclerId = params.get('recyclerId');
      this.httpClient.get(`/user/${recyclerId}`)
        .subscribe((data: User) => this.name = data.fullname);
    });
  }
}

interface User {
  fullname: string;
}
