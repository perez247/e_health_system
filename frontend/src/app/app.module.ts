import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    ComponentsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
