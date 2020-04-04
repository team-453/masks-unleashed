import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionPointRoutingModule } from './collection-point-routing.module';
import { CollectionPointDashboardComponent } from './collection-point-dashboard/collection-point-dashboard.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    CollectionPointDashboardComponent,
  ],
  imports: [
    CommonModule,
    CollectionPointRoutingModule
  ],
  exports: [
    CollectionPointRoutingModule
  ]
})
export class CollectionPointModule {
}
