import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecyclerDashboardComponent } from './recycler-dashboard/recycler-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {
    path: '',
    component: RecyclerDashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecycleRoutingModule {
}
