import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionPointDashboardComponent } from './collection-point-dashboard/collection-point-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: CollectionPointDashboardComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionPointRoutingModule {
}
