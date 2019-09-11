import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AppRoutes } from './shared/routes/app.routes';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const appRoutes = AppRoutes.generateRoutes();

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  {
    path: appRoutes.public.name,
    loadChildren: './public/public.module#PublicModule'
  },
  {
    path: appRoutes.private.name,
    loadChildren: './private/private.module#PrivateModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      //  useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
