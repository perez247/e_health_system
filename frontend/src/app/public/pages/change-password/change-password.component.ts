import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'app/shared/routes/app.routes';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  appRoutes = AppRoutes.generateRoutes();

  constructor() { }

  ngOnInit() {
  }

}
