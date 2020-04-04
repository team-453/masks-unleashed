import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionPointDashboardComponent } from './collection-point-dashboard/collection-point-dashboard.component';
import { RecyclerDashboardComponent } from './recycler-dashboard/recycler-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [
  {path: 'collection-point-dashboard', component: CollectionPointDashboardComponent},
  {path: 'recycler-dashboard', component: RecyclerDashboardComponent},
  {path: 'user-dashboard', component: UserDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
