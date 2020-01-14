import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { EditProfileSwmService } from "../../services/edit-profile-swm/edit-profile-swm.service";
import { SessionService } from "../../services/session/session.service";
@Component({
  selector: 'app-edit-profile-swm',
  templateUrl: './edit-profile-swm.page.html',
  styleUrls: ['./edit-profile-swm.page.scss'],
})
export class EditProfileSwmPage implements OnInit {

  userData: any;

  prefixList: any = [];

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public editProfileSwmService: EditProfileSwmService,
    public sessionService: SessionService
    ) { }

  ngOnInit() {
    this.getUserDataByPsId(this.sessionService.userId);
    this.getAllPrefix();
  }

  public getUserDataByPsId(id=null) {
    this.editProfileSwmService.getUserDataByPsId(id).subscribe(res => {
      this.userData = res[0];
    });
  }

  public getAllPrefix() {
    this.editProfileSwmService.getAllPrefix().subscribe(res => {
      this.prefixList = res;
    });
  }

  public updateById(id=null, psData: any) {
    this.editProfileSwmService.updateById(id, psData).subscribe(res => {
      this.editProfile();
    });
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
