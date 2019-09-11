import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-footer',
  templateUrl: './private-footer.component.html',
  styleUrls: ['./private-footer.component.scss']
})
export class PrivateFooterComponent implements OnInit {
  dateTime: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
