import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionPointRoutingModule } from './collection-point-routing.module';
import { CollectionPointDashboardComponent } from './collection-point-dashboard/collection-point-dashboard.component';
import { ContactDetailsFormComponent } from './contact-details-form/contact-details-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CollectionPointDashboardComponent,
    ContactDetailsFormComponent,
    RegisterComponent,
    CockpitComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CollectionPointRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    CollectionPointRoutingModule
  ]
})
export class CollectionPointModule {
}
