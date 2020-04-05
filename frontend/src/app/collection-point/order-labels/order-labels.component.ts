import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-labels',
  templateUrl: './order-labels.component.html',
  styleUrls: ['./order-labels.component.scss']
})
export class OrderLabelsComponent implements OnInit {

  constructor() {
  }

  availableLabels = [
    {bagType: '65L', maskType: 'FFP2', ordered: false},
    {bagType: '120L', maskType: 'N95', ordered: false},
    {bagType: '120L', maskType: 'Surgical', ordered: false},
  ];

  ngOnInit(): void {
  }

  order(label: any) {
    label.ordered = true;
  }
}
