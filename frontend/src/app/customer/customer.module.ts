import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { UserDetailsFormComponent } from './user-details-form/user-details-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [UserDashboardComponent, UserDetailsFormComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class CustomerModule {
}
