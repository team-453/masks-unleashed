import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionPointRoutingModule } from './collection-point-routing.module';
import { CollectionPointDashboardComponent } from './collection-point-dashboard/collection-point-dashboard.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CollectionsComponent } from './collections/collections.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { ApiInterceptor } from '../ApiInterceptor';
import { OrderRecyclingComponent } from './order-recycling/order-recycling.component';
import { MatBadgeModule } from '@angular/material/badge';
import { OrderLabelsComponent } from './order-labels/order-labels.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    CollectionPointDashboardComponent,
    ProfileFormComponent,
    CockpitComponent,
    CollectionsComponent,
    OrderRecyclingComponent,
    OrderLabelsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CollectionPointRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatBadgeModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }],
  exports: [
    CollectionPointRoutingModule
  ]
})
export class CollectionPointModule {
}
