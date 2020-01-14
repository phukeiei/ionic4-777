import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

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

  costRegister: Number;
  suCode: string;

  constructor(public alertController: AlertController,
    public registerUserService: RegisterUserService,
    public navCtrl: NavController,
    public sessionService: SessionService) { }

  ngOnInit() {
    this.getActiveCostRegister();
    this.getPersonDataById(this.sessionService.userId);
    this.getAllPrefix();

    this.generateSuCode();
  }

  getAllPrefix() {
    this.registerUserService.getAllPrefix().subscribe(result => {
      this.prefixList = result;
    });
  }
  getPersonDataById(id = null) {
    this.registerUserService.getPersonDataById(id).subscribe(result => {
      this.personData = result[0];
      this.personData.psd_birthdate = this.personData.psd_birthdate.toString().substring(0, 10);

      this.registerUserService.getCostRegisterByAge(new Date().getFullYear() -
        parseInt(this.personData.psd_birthdate.toString().substring(0, 4))
      ).subscribe(res => {
        this.costRegister = parseInt(res[0].scr_cost.toString());
      });
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
      this.suCode, //su_code
      this.personData.psd_cellphone,
      this.personData.psd_birthdate,

      this.su_work,
      this.su_workplace,

      this.su_tel_contact,
      this.su_contact_pf_id,
      this.su_contact_fname,
      this.su_contact_lname,

      1,//su_ss_id

      new Date().getFullYear().toString() + "-" +
      (new Date().getMonth() + 1).toString() + "-" +
      new Date().getDate().toString(),//su_create_date

      (new Date().getFullYear() + 1).toString() + "-" +
      (new Date().getMonth() + 1).toString() + "-" +
      new Date().getDate().toString(),//su_expire_date

      null,//su_update_date

      this.costRegister//su_anit_cost

    ).subscribe(result => {
      console.log('insert complete');
    });
  }

  generateSuCode() {
    this.registerUserService.getLastUserCode().subscribe(result => {
      let currentDate = new Date();

      let yearNum = (currentDate.getFullYear() + 543).toString();
      yearNum = yearNum.substring(2, 4);

      let month = (currentDate.getMonth() + 1).toString();
      if (month.length == 1) month = '0' + month;

      let LastIdYear = result[0].yearNumber.toString();

      let LastIdMonth = result[0].monthNumber.toString();

      let LastIdNum = (parseInt(result[0].id.toString()) + 1).toString();

      if (LastIdNum.length == 1)
      {
        LastIdNum = "00" + LastIdNum;
      }
      else if(LastIdNum.length == 2)
      {
        LastIdNum = "0" + LastIdNum;
      }

      if ((yearNum != LastIdYear) || (month != LastIdMonth)) {
        this.suCode = yearNum + month + "001";
      } else {
        this.suCode = yearNum + month + LastIdNum;
      }

    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'บันทึกการสมัครสมาชิก',
      message: 'ต้องการบันทึกหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            this.insert();
            this.navCtrl.navigateRoot('/home-results');
          }
        }
      ]
    });

    await alert.present();
  }
}
