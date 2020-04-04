import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionPointRoutingModule } from './collection-point-routing.module';
import { CollectionPointDashboardComponent } from './collection-point-dashboard/collection-point-dashboard.component';
import { ContactDetailsFormComponent } from './contact-details-form/contact-details-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CollectionPointDashboardComponent,
    ContactDetailsFormComponent
  ],
  imports: [
    CommonModule,
    CollectionPointRoutingModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    CollectionPointRoutingModule
  ]
})
export class CollectionPointModule {
}
