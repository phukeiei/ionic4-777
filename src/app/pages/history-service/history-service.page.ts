import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-service',
  templateUrl: './history-service.page.html',
  styleUrls: ['./history-service.page.scss'],
})
export class HistoryServicePage implements OnInit {
  searchTerm: string;
  datetimeList: any[] = [
    { date: "10/10/2563", time: "10:10:10" },
    { date: "11/10/2563", time: "10:20:10" },
    { date: "12/10/2563", time: "10:30:10" },
    { date: "13/10/2563", time: "10:40:10" },
    { date: "14/10/2563", time: "10:50:10" },
    { date: "15/10/2563", time: "10:60:10" },
    { date: "16/10/2563", time: "10:70:10" },
    { date: "17/10/2563", time: "10:80:10" }

  ];

  constructor() {
  }

  searchChanged() {
    this.datetimeList = this.filterItems(this.searchTerm);
  }
  filterItems(searchTerm) {
    return this.datetimeList.filter((item) => {
      return item.TypeOfNotification.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  ngOnInit() {
  }

}