import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { RegisterUserService } from "../../services/register-user/register-user.service";
import { SessionService } from "../../services/session/session.service";
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
  su_work: any;
  su_workplace: any;
  su_tel_contact: any;
  su_contact_pf_id: any;
  su_contact_fname: any;
  su_contact_lname: any;
  su_ss_id: any;
  su_expire_date: any;
  su_create_date: any;
  su_update_date: any;
  su_anit_cost: any;

  age_costList: any = [];
  prefixList: any = [];
  personData: any;

  constructor(public alertController: AlertController,
              public registerUserService: RegisterUserService,
              public sessionService: SessionService) { }

  ngOnInit() {
    this.getActiveCostRegister();
    this.getPersonDataById(this.sessionService.userId);
    this.getAllPrefix();
  }

  getAllPrefix() {
    this.registerUserService.getAllPrefix().subscribe(result => {
      this.prefixList = result;
    });
  }
  getPersonDataById(id=null) {
    this.registerUserService.getPersonDataById(id).subscribe(result => {
      this.personData = result[0];
    });
  }
  getActiveCostRegister() {
    this.registerUserService.getActiveCostRegister().subscribe(result => {
      this.age_costList = result;
    });
  }

  insert() {
    this.registerUserService.insert(
      this.sessionService.userId,
      123, //su_code
      this.personData.psd_cellphone,
      this.personData.psd_birthdate,
      this.su_work,
      this.su_workplace,
      this.su_tel_contact,
      this.su_contact_pf_id,
      this.su_contact_fname,
      this.su_contact_lname,
      1,//su_ss_id
      123,//su_create_date
      132,//su_expire_date
      444,//su_update_date
      500//su_anit_cost
    ).subscribe(result => {

    });
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
