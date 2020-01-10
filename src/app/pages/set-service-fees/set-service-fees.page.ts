import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-service-fees',
  templateUrl: './set-service-fees.page.html',
  styleUrls: ['./set-service-fees.page.scss'],
})
export class SetServiceFeesPage implements OnInit {
  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  }
  constructor() { }

  ngOnInit() {
  }

}
