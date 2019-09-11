import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { PrivateFooterComponent } from '../components/private-footer/private-footer.component';
import { PrivateNavbarComponent } from '../components/private-navbar/private-navbar.component';
import { PrivateSidebarComponent } from '../components/private-sidebar/private-sidebar.component';
import { PrivateFullComponent } from '../layouts/private-full/private-full.component';
import { PrivateContentComponent } from '../layouts/private-content/private-content.component';
import { PrivateDashboardComponent } from '../pages/private-dashboard/private-dashboard.component';
import { PrivatePatientsComponent } from '../pages/private-patients/private-patients.component';
import { PrivatePatientComponent } from '../pages/private-patient/private-patient.component';
import { PrivateStaffsComponent } from '../pages/private-staffs/private-staffs.component';
import { PrivateStaffComponent } from '../pages/private-staff/private-staff.component';


@NgModule({

    declarations: [
        PrivateFullComponent,
        PrivateContentComponent,
        PrivateFooterComponent,
        PrivateNavbarComponent,
        PrivateSidebarComponent,
        PrivateDashboardComponent,
        PrivatePatientsComponent,
        PrivatePatientComponent,
        PrivateStaffsComponent,
        PrivateStaffComponent
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        SharedModule,
        PrivateFullComponent,
        PrivateContentComponent,
        PrivateFooterComponent,
        PrivateNavbarComponent,
        PrivateSidebarComponent,
        PrivateDashboardComponent,
        PrivatePatientsComponent,
        PrivatePatientComponent,
        PrivateStaffsComponent,
        PrivateStaffComponent
    ]

})

export class PrivateSharedModule {}
