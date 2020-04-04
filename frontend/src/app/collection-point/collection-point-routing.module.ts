import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionPointDashboardComponent } from './collection-point-dashboard/collection-point-dashboard.component';
import { CockpitComponent } from './cockpit/cockpit.component';


const routes: Routes = [
  {
    path: '',
    component: CollectionPointDashboardComponent,
    children: [
      {
        path: 'cockpit',
        component: CockpitComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionPointRoutingModule {
}
