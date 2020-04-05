import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-collection-point-dashboard',
  templateUrl: './collection-point-dashboard.component.html',
  styleUrls: ['./collection-point-dashboard.component.scss']
})
export class CollectionPointDashboardComponent implements OnInit {

  name: string;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const collectorId = params.get('collectorId');
      this.httpClient.get(`/user/${collectorId}`)
        .subscribe((data: User) => this.name = data.fullname);
    });
  }
}


interface User {
  fullname: string;
}
