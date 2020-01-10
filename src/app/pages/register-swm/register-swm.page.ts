import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-swm',
  templateUrl: './register-swm.page.html',
  styleUrls: ['./register-swm.page.scss'],
})
export class RegisterSwmPage implements OnInit {

  constructor(public alertController: AlertController) {}

  ngOnInit() {

  }
async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'บันทึกข้อมูลการสมัครเรียบร้อยแล้ว.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
