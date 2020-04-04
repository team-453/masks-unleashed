import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CollectionPointDashboardComponent } from './collection-point-dashboard/collection-point-dashboard.component';


const routes: Routes = [
  {path: 'collection-point-dashboard', component: CollectionPointDashboardComponent},
  {path: 'recycler-dashboard', loadChildren: () => import(`./recycle/recycle.module`).then(m => m.RecycleModule)},
  {path: 'user-dashboard', component: UserDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
