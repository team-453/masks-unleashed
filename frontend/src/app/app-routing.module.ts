import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'collection-point-dashboard',
    loadChildren: () => import(`./collection-point/collection-point.module`).then(m => m.CollectionPointModule)
  },
  {path: 'recycler-dashboard', loadChildren: () => import(`./recycle/recycle.module`).then(m => m.RecycleModule)},
  {path: 'user-dashboard', loadChildren: () => import(`./customer/customer.module`).then(m => m.CustomerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
