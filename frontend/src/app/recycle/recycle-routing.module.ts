import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecyclerDashboardComponent } from './recycler-dashboard/recycler-dashboard.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: ':recyclerId',
    component: RecyclerDashboardComponent,
    children: [
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
