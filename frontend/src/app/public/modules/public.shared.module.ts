import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { SigninComponent } from '../pages/signin/signin.component';
import { PublicContentComponent } from '../layouts/public-content/public-content.component';
import { PublicFullComponent } from '../layouts/public-full/public-full.component';
import { ForgottenPasswordComponent } from '../pages/forgotten-password/forgotten-password.component';
import { ChangePasswordComponent } from '../pages/change-password/change-password.component';


@NgModule({
    declarations: [
        PublicContentComponent,
        PublicFullComponent,
        SigninComponent,
        ForgottenPasswordComponent,
        ChangePasswordComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
        SharedModule,
        PublicContentComponent,
        PublicFullComponent,
        SigninComponent,
        ForgottenPasswordComponent,
        ChangePasswordComponent,
    ]
})

export class PublicSharedModule { }
