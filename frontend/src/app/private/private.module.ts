import { NgModule } from '@angular/core';
import { PrivateSharedModule } from './modules/private.shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    PrivateSharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
