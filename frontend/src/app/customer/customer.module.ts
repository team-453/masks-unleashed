import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CollectionPointMapComponent } from '../customer/collection-point-map/collection-point-map.component';
import { AgmCoreModule } from '@agm/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from '../ApiInterceptor';


@NgModule({
  declarations: [UserDashboardComponent, CollectionPointMapComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatButtonModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJSD-Eju02VEJwWpNWU2dC4uOmir1Rv0s'
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }],
})
export class CustomerModule {
}
