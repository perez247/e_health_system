import { AppRoutes } from 'app/shared/routes/app.routes';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicContentComponent } from './layouts/public-content/public-content.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ForgottenPasswordComponent } from './pages/forgotten-password/forgotten-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';


// Get the whole routes of the app
const appRoutes = AppRoutes.generateRoutes();

const routes: Routes = [
    {
        path: '',
        redirectTo: appRoutes.public.signIn.name,
        pathMatch: 'full',
    },
    {
        path: '',
        component: PublicContentComponent,
        children: [
            {
                path: appRoutes.public.signIn.name,
                component: SigninComponent
            },
            {
                path: appRoutes.public.forgottenPassword.name,
                component: ForgottenPasswordComponent
            },
            {
                path: appRoutes.public.changePassword.name,
                component: ChangePasswordComponent
            }
        ]
    },
    {
        path: '**',
        component: SigninComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PublicRoutingModule { }
