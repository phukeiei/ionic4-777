import { Component, OnInit } from '@angular/core';
import { HistoryServiceService } from "../../services/history-service/history-service.service";
import { SessionService } from "../../services/session/session.service";
@Component({
  selector: 'app-history-service',
  templateUrl: './history-service.page.html',
  styleUrls: ['./history-service.page.scss'],
})
export class HistoryServicePage implements OnInit {
  searchTerm: string;
  datetimeList: any = [];

  constructor(
              public historyServiceService: HistoryServiceService,
              public sessionService: SessionService
             ) {
  }
  ngOnInit() {
    this.getDataByPsId();
  }
  getDataByPsId() {
    this.historyServiceService.getDataByPsId(this.sessionService.userId).subscribe(result => {
      this.datetimeList = result;
      console.log(this.datetimeList);
    });
  }
  searchChanged() {
    this.datetimeList = this.filterItems(this.searchTerm);
  }
  filterItems(searchTerm) {
    return this.datetimeList.filter((item) => {
      return item.TypeOfNotification.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}