import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'app/shared/routes/app.routes';

const appRoutes = AppRoutes.generateRoutes();

declare const $: any;
declare interface SiderBarRouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const SideBarRoutes: SiderBarRouteInfo[] = [
    { path: '/' + appRoutes.private.dashboard.path, title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/' + appRoutes.private.patients.path, title: 'Patients',  icon: 'supervised_user_circle', class: '' },
    { path: '/' + appRoutes.private.staffs.path, title: 'Staffs',  icon: 'assignment_ind', class: '' },
]

@Component({
  selector: 'app-private-sidebar',
  templateUrl: './private-sidebar.component.html',
  styleUrls: ['./private-sidebar.component.scss']
})
export class PrivateSidebarComponent implements OnInit {

  appRoutes = AppRoutes.generateRoutes();
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = SideBarRoutes.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
