import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { CollectionPointMapComponent } from './collection-point-map/collection-point-map.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CollectionPointMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJSD-Eju02VEJwWpNWU2dC4uOmir1Rv0s'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
