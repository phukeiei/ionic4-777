import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService  } from '../../services/Data/data.service';
import { debounceTime } from "rxjs/operators";
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.page.html',
  styleUrls: ['./manage-user.page.scss'],
})
export class ManageUserPage implements OnInit {
  public searchControl: FormControl;
  public items: any;
userList:any[]=[
  {su_code:"60160344", pf_name:"นาย" ,ps_fname:"พฤกษ์", ps_lname:"เทพพิทักษ์", status:"สมาชิก"},
  {su_code:"60160345", pf_name:"นาย" ,ps_fname:"พฤกษ์", ps_lname:"เทพพิทักษ์", status:"ตัดสิทธิ์"},
  {su_code:"60160346", pf_name:"นาย" ,ps_fname:"พฤกษ์", ps_lname:"เทพพิทักษ์", status:"หมดอายุ"}
]
  constructor(private dataService: DataService ,private actionSheetController:ActionSheetController) {
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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ต้องการเปลี่ยนสถานะหรือไม่',
      subHeader: 'สถานะเดิม : สมาชิก',
      buttons: [{
        text: 'สมาชิก',
        icon: 'person-add',
        handler: () => {
          console.log('กดอนุมัติ');
        }
      }, {
        text: 'ตัดสิทธิ์',
        role: 'destructive',
        icon: 'backspace',
        handler: () => {
          console.log('กดลบ');
        }
      }, {
        text: 'หมดอายุ',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
}