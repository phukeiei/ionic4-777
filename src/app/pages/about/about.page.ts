import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  //swm_cost-regiter
  scr_age_min: any = 18;
  scr_cost_min: any = 500;
  scr_age_max: any = 18;
  scr_cost_max: any = 750;
  //swm_cost_pool
  scp_age_min:any=18;
  scp_cost_min:any=25;
  scp_age_max:any=18;
  scp_cost_max:any=50;
  constructor() { }

  ngOnInit() {
  }

}
