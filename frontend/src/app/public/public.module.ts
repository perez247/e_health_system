import { NgModule } from '@angular/core';
import { PublicSharedModule } from './modules/public.shared.module';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    PublicSharedModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
