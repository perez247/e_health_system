import { NgModule } from '@angular/core';
import { PublicSharedModule } from './modules/public.shared.module';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { ForgottenPasswordComponent } from './pages/forgotten-password/forgotten-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    PublicSharedModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
