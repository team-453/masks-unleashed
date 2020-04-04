import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecyclerDashboardComponent } from './recycler-dashboard/recycler-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { OrdersComponent } from './orders/orders.component';
import { RecycleRoutingModule } from './recycle-routing.module';
import { CockpitComponent } from './cockpit/cockpit.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from '../ApiInterceptor';


@NgModule({
  declarations: [
    RecyclerDashboardComponent,
    ProfileComponent,
    OrdersComponent,
    CockpitComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    RecycleRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }],
  exports: [
    RecycleRoutingModule
  ]
})
export class RecycleModule {
}
