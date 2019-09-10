import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'app/shared/routes/app.routes';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss']
})
export class ForgottenPasswordComponent implements OnInit {

  appRoutes = AppRoutes.generateRoutes();

  constructor() { }

  ngOnInit() {
  }

}
