import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-point-map',
  templateUrl: './collection-point-map.component.html',
  styleUrls: ['./collection-point-map.component.scss']
})
export class CollectionPointMapComponent {
  latitude = 47.387084;
  longitude = 8.514754;
  zoom = 14;

  markers: Marker[] = [
    {
      label: 'Collection Point Zürich Hauptbahnhof',
      openingTimes: '10:00 - 12:00 13:00 - 17:00',
      reviews: '⭐⭐⭐⭐⭐',

      latitude: 47.387084, longitude: 8.514754
    },
    {
      label: 'Collection Point Hardbrücke',
      openingTimes: '08:00 - 12:00 13:00 - 20:00',
      reviews: '⭐⭐⭐⭐',
      latitude: 47.388231, longitude: 8.519773
    }
  ];


  onMouseOver(infoWindow, $event: MouseEvent) {
    infoWindow.open();
  }


  onMouseOut(infoWindow, $event: MouseEvent) {
    infoWindow.close();
  }
}

interface Marker {
  label: string;
  openingTimes: string;
  latitude: number;
  longitude: number;
  reviews: string;
}
