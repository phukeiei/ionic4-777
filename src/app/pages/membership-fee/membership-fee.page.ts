import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership-fee',
  templateUrl: './membership-fee.page.html',
  styleUrls: ['./membership-fee.page.scss'],
})
export class MembershipFeePage implements OnInit {
  membershipFeeList: any[] = [
    { scr_age_min: 0 ,scr_cost_min: 200,scr_age_max: 17,scr_cost_max: 400}

  ];
  constructor() { }

  ngOnInit() {
  }

}
