import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
  prefixList: any[] = [
    "นาย",
    "นาง",
    "นางสาว",
    "เด็กชาย",
    "เด็กหญิง",
    "ไม่บอกหรอก"
  ];
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'บันทึกการสมัครสมาชิก',
      message: 'ต้องการบันทึกหรือไม่',
      buttons: ['ตกลง', 'ยกเลิก']
    });

    await alert.present();
  }
}
