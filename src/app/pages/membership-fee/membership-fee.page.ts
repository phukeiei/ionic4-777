import { Component, OnInit } from '@angular/core';
import { MembershipFeeService } from "../../services/membership-fee/membership-fee.service";
import { forEach } from '@angular/router/src/utils/collection';
import { element } from '@angular/core/src/render3';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-membership-fee',
  templateUrl: './membership-fee.page.html',
  styleUrls: ['./membership-fee.page.scss'],
})
export class MembershipFeePage implements OnInit {
  allData: any = [];
  membershipFeeList: any = [];
  constructor(public membershipFeeService: MembershipFeeService) { }

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.membershipFeeService.getAll().subscribe(res => {
      this.allData = res;

      let subIndex = 0;
      for (const iterator of this.allData) {

        if (subIndex == 0)
          this.membershipFeeList[parseInt(iterator.scr_reference)] = [];

        this.membershipFeeList[parseInt(iterator.scr_reference)][subIndex++] = iterator;

        if (subIndex > 1) subIndex = 0;
      }
      this.membershipFeeList = this.membershipFeeList.filter(function(e){return e});
      console.log(this.membershipFeeList)
    });
  }

  public updateIsActiveByReference(ref) {
    this.membershipFeeService.updateIsActiveByReference(ref).subscribe(res => {
      this.membershipFeeList.length = 0;
      this.getAll();
    });
  }
}
