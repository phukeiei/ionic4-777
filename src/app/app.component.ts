import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

import { SessionService } from "./services/session/session.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public appPages: Array<Pages>;
  public ck :any

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private sessionService: SessionService
  ) {
    console.log("app com work")
    this.initializeApp();
   
  }
  ngOnInit() {
    console.log("in ng on it")
    if (this.ck == "1") {
      console.log("in 1")
      this.appPages = [
        {
          title: 'หน้าแรก',
          url: '/home-results',
          direct: 'root',
          icon: 'home'
        },
        {
          title: 'เกี่ยวกับ',
          url: '/about',
          direct: 'forward',
          icon: 'information-circle-outline'
        },
        {
          title: 'สมัครสมาชิก',
          url: '/register-user',
          direct: 'forward',
          icon: 'md-person-add'
        },
        {
          title: 'ประวัติใช้บริการ',
          url: '/history-service',
          direct: 'forward',
          icon: 'document'
        },
        {
          title: 'แก้ไขข้อมูล',
          url: '/edit-profile-swm',
          direct: 'forward',
          icon: 'build'
        },
        {
          title: 'ตั้งค่า',
          url: '/settings',
          direct: 'forward',
          icon: 'cog'
        }
      ];
    } else if (this.ck == "2") {
      console.log("in 1")

      this.appPages = [
        {
          title: 'หน้าแรก',
          url: '/home-results',
          direct: 'root',
          icon: 'home'
        },
        {
          title: 'ยืนยันการสมัครสมาชิก',
          url: '/confirm-register',
          direct: 'forward',
          icon: 'person-add'
        },
        {
          title: 'กำหนดค่าใช้บริการ',
          url: '/set-service-fees',
          direct: 'forward',
          icon: 'options'
        },
        {
          title: 'จัดการข้อมูล',
          url: '/manage-user',
          direct: 'forward',
          icon: 'cog'
        },
        {
          title: 'ตั้งค่า',
          url: '/settings',
          direct: 'forward',
          icon: 'cog'
        }
      ];
    }else{
      console.log("mot 1 2")
    }

  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => { });
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('/edit-profile');
  }

  async logout() {
    await this.sessionService.logout();
    await this.navCtrl.navigateRoot('/');
  }
}
