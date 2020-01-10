import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile-swm',
  templateUrl: './edit-profile-swm.page.html',
  styleUrls: ['./edit-profile-swm.page.scss'],
})
export class EditProfileSwmPage implements OnInit {
  //swm_user
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

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
    ) { }

  ngOnInit() {
  }

  async editProfile() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'แก้ไขข้อมูลสมาชิกสำเร็จ',
        duration: 2000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home-results');
    });
  }
}
