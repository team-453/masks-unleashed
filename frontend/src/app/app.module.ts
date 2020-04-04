import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { CollectionPointMapComponent } from './collection-point-map/collection-point-map.component';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CollectionPointDashboardComponent } from './collection-point-dashboard/collection-point-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { RecycleModule } from './recycle/recycle.module';

@NgModule({
  declarations: [
    AppComponent,
    CollectionPointMapComponent,
    UserDashboardComponent,
    CollectionPointDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJSD-Eju02VEJwWpNWU2dC4uOmir1Rv0s'
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    RecycleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
