import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-confirm-register',
  templateUrl: './confirm-register.page.html',
  styleUrls: ['./confirm-register.page.scss'],
})
export class ConfirmRegisterPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }
  subscriberList: any[] = [
    {date: "07/01/2563", id: 60160330,prefix: "นาย", firstname: "กัณณภัต", lastname:"เพียรแก้ว"},
    {date: "28/12/2562", id: 60160338,prefix: "นาง", firstname: "สาธิมาภรณ์", lastname:"นิรมิตวสุ"},
    {date: "28/12/2562", id: 60160111,prefix: "นาย", firstname: "พัสกร", lastname:"ใชยะ"}

  ];
  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ต้องการอนุมัติหรือไม่',
      buttons: [{
        text: 'อนุมัติ',
        icon: 'person-add',
        handler: () => {
          console.log('กดอนุมัติ');
        }
      }, {
        text: 'ไม่อนุมัติ',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('กดลบ');
        }
      }, {
        text: 'ยกเลิก',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('กดยกเลิก');
        }
      }]
    });
    await actionSheet.present();
  }

}
