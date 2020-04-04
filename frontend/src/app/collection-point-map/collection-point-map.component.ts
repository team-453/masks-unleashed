import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-point-map',
  templateUrl: './collection-point-map.component.html',
  styleUrls: ['./collection-point-map.component.scss']
})
export class CollectionPointMapComponent implements OnInit {
  latitude = 47.387084;
  longitude = 8.514754;
  zoom = 14;

  markers = [
    {label: 'marker 1', latitude: 47.387084, longitude: 8.514754},
    {label: 'marker 2', latitude: 47.388231, longitude: 8.519773}
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

}

interface Marker {
  label: string;
  latitude: number;
  longitude: number;
}
