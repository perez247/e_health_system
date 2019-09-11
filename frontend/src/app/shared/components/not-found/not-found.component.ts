import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'app/shared/routes/app.routes';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  appRoutes = AppRoutes.generateRoutes();

  constructor() { }

  ngOnInit() {
  }

}
