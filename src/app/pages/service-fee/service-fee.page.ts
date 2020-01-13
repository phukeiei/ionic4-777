import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-fee',
  templateUrl: './service-fee.page.html',
  styleUrls: ['./service-fee.page.scss'],
})
export class ServiceFeePage implements OnInit {
  customAlertOptions: any = {
    translucent: true
  };
 
  constructor() { }

  ngOnInit() {
  }

}
