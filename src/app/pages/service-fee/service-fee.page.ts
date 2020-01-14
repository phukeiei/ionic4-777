import { Component, OnInit } from '@angular/core';
import { ServiceFeeService } from "../../services/service-fee/service-fee.service";
@Component({
  selector: 'app-service-fee',
  templateUrl: './service-fee.page.html',
  styleUrls: ['./service-fee.page.scss'],
})
export class ServiceFeePage implements OnInit {
  customAlertOptions: any = {
    translucent: true
  };
  memberCostList: any = [];
  nonMemberCostList: any = [];

  option: number;

  displayData: any = [];

  constructor(public serviceFeeService: ServiceFeeService) { }

  ngOnInit() {
    this.getBySugId(1, this.nonMemberCostList);
    this.getBySugId(2, this.memberCostList);
  }

  public optionalCost() {
    if (this.option == 1) {
      this.displayData = this.nonMemberCostList;
    }else {
      this.displayData = this.memberCostList;
    }
    this.displayData = this.displayData.filter(function(e){return e});
    console.log(this.displayData);
  }

  public getBySugId(id, variable) {
    this.serviceFeeService.getBySugId(id).subscribe(res => {
      let tmpData: any = res;
      let subIndex = 0;

      for (const iterator of tmpData) {
        if (subIndex == 0)
          variable[parseInt(iterator.scp_reference)] = [];

          variable[parseInt(iterator.scp_reference)][subIndex++] = iterator;

        if (subIndex > 1) subIndex = 0;
      }

      variable = variable.filter(function(e){return e});
      console.log(variable);
      this.optionalCost();
    });
  }

  public updateIsActiveByReference(ref) {
    this.serviceFeeService.updateIsActiveByReference(this.option, ref).subscribe(res => {
      this.nonMemberCostList.length = 0;
      this.memberCostList.length = 0;
      this.getBySugId(1, this.nonMemberCostList);
      this.getBySugId(2, this.memberCostList);
    });
  }
}
