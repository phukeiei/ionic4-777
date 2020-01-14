import { Component, OnInit } from '@angular/core';
import {  NavController} from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { DataService  } from '../../services/Data/data.service';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.page.html',
  styleUrls: ['./manage-user.page.scss'],
})
export class ManageUserPage implements OnInit {
  public searchControl: FormControl;
  public items: any;

  constructor(private dataService: DataService) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.setFilteredItems("");

    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.setFilteredItems(search);
      });
  }

  setFilteredItems(searchTerm) {
    this.items = this.dataService.filterItems(searchTerm);
  }
}