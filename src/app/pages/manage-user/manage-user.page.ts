import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../../services/Data/data.service';
import { debounceTime } from "rxjs/operators";
import { ActionSheetController, NavController } from '@ionic/angular';
import { ManageUserService } from "../../services/manage-user/manage-user.service";
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.page.html',
  styleUrls: ['./manage-user.page.scss'],
})
export class ManageUserPage implements OnInit {
  public searchControl: FormControl;
  public items: any;
  userList: any = [];

  statusId: Number = 2;
  constructor(private dataService: DataService, private actionSheetController: ActionSheetController,
    public manageUserService: ManageUserService) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.getUserListByStatusId(2);

    this.setFilteredItems("");

    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.setFilteredItems(search);
      });
  }

  public getUserListByStatusId(id) {
    this.manageUserService.getUserListByStatusId(id).subscribe(res => {
      this.userList = res;
    });
  }

  public updateStatusById(id, ssId) {
    this.manageUserService.updateStatusById(id, ssId).subscribe(res => {
      this.getUserListByStatusId(this.statusId);
    });
  }

  setFilteredItems(searchTerm) {
    this.items = this.dataService.filterItems(searchTerm);
  }

  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'ต้องการเปลี่ยนสถานะหรือไม่',
      buttons: [{
        text: 'สมาชิก',
        icon: 'person-add',
        handler: () => {
          console.log('กดอนุมัติ');
          this.updateStatusById(id, 2);
        }
      }, {
        text: 'ตัดสิทธิ์',
        role: 'destructive',
        icon: 'backspace',
        handler: () => {
          console.log('กดลบ');
          this.updateStatusById(id, 3);
        }
      }, {
        text: 'หมดอายุ',
        icon: 'clock',
        handler: () => {
          this.updateStatusById(id, 4);
        }
      }, {
        text: 'ยกเลิก',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
}