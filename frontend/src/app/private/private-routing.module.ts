import { AppRoutes } from 'app/shared/routes/app.routes';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivateFullComponent } from './layouts/private-full/private-full.component';
import { PrivateDashboardComponent } from './pages/private-dashboard/private-dashboard.component';
import { PrivatePatientComponent } from './pages/private-patient/private-patient.component';
import { PrivatePatientsComponent } from './pages/private-patients/private-patients.component';
import { PrivateStaffComponent } from './pages/private-staff/private-staff.component';
import { PrivateStaffsComponent } from './pages/private-staffs/private-staffs.component';

// Get the whole routes of the app
const appRoutes = AppRoutes.generateRoutes();

const routes: Routes = [
    {
        path: '',
        redirectTo: appRoutes.private.dashboard.name,
        pathMatch: 'full',
    },
    {
        path: '',
        component: PrivateFullComponent,
        children: [
            {
                path: appRoutes.private.dashboard.name,
                component: PrivateDashboardComponent
            },
            {
                path: appRoutes.private.patient.name,
                component: PrivatePatientComponent
            },
            {
                path: appRoutes.private.patients.name,
                component: PrivatePatientsComponent
            },
            {
                path: appRoutes.private.staff.name,
                component: PrivateStaffComponent
            },
            {
                path: appRoutes.private.staffs.name,
                component: PrivateStaffsComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PrivateRoutingModule { }

