import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
  su_id: any = 1;
  su_ps_id: any = '60160153';
  su_code: any = '6205001';
  su_tel: any = '0868397002';
  su_birthday: any = '25-09-1998';
  su_work: any = 'นักศึกษา';
  su_workplace: any = 'ม.บูรพา';
  su_tel_contact: any = '0878122525';
  su_contact_pf_id: any = 0;
  su_contact_fname: any = 'Earthp';
  su_contact_lname: any = 'hawawa';
  su_old_state: any = 2;
  su_state: any = 3;
  su_expire_date: any = '2019-05-31';
  su_create_date: any = '2019-05-31';
  su_update_date: any = '2019-10-02 19:11:47';
  su_anit_cost: any = '500';
  su_profile_pic_name: any = 'default,png'

  //hr_person
  ps_pf_id: any = 1;
  ps_fname: any = 'พฤกษ์';
  ps_lname: any = 'เทพพิทักษ์';

  //hr_person_detail
  psd_addcur_no: any = '10 ซอยวัดมหาธาตุ';
  psd_addcur_pv_id: any = '11';
  psd_addcur_amph_id: any = '724';
  psd_addcur_dist_id: any = '6593';
  psd_addcur_zipcode: any = '70000';

  //swm_cost-regiter
  age_costList: any[] = [
    {
      scp_id: 8, scr_age_min: 0, scr_age_max: 17, scr_cost: 500,
      scp_sug_id: 1, scp_reference: 4, scp_is_active: 'Y',
      scp_create_date: '2019-05-20 14:31:27', scp_update_date: '2019-12-13 16:12:13'
    }, 
    {
      scp_id: 9, scr_age_min: 18, scr_age_max: 99, scr_cost: 750,
      scp_sug_id: 1, scp_reference: 4, scp_is_active: 'Y',
      scp_create_date: '2019-05-20 14:31:27', scp_update_date: '2019-12-13 16:12:13'
    }
  ];
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
