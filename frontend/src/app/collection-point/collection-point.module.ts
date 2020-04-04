import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionPointRoutingModule } from './collection-point-routing.module';
import { CollectionPointMapComponent } from './collection-point-map/collection-point-map.component';
import { CollectionPointDashboardComponent } from './collection-point-dashboard/collection-point-dashboard.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    CollectionPointDashboardComponent,
    CollectionPointMapComponent
  ],
  imports: [
    CommonModule,
    CollectionPointRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJSD-Eju02VEJwWpNWU2dC4uOmir1Rv0s'
    }),
  ],
  exports: [
    CollectionPointRoutingModule
  ]
})
export class CollectionPointModule {
}
