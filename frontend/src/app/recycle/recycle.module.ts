import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecyclerDashboardComponent } from './recycler-dashboard/recycler-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { OrdersComponent } from './orders/orders.component';
import { RecycleRoutingModule } from './recycle-routing.module';


@NgModule({
  declarations: [
    RecyclerDashboardComponent,
    ProfileComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    RecycleRoutingModule
  ],
  exports: [
    RecycleRoutingModule
  ]
})
export class RecycleModule {
}
