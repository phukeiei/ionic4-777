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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private sessionService: SessionService
  ) {
    this.initializeApp();
  }
  ngOnInit() {
    if (this.sessionService.status == "") { this.sessionService.status = "1"; }
    if (this.sessionService.status == "1") {
      this.appPages = [
        {
          title: 'Home',
          url: '/home-results',
          direct: 'root',
          icon: 'home'
        },
        {
          title: 'About',
          url: '/about',
          direct: 'forward',
          icon: 'information-circle-outline'
        },
        {
          title: 'Register',
          url: '/register-user',
          direct: 'forward',
          icon: 'md-person-add'
        },
        {
          title: 'History',
          url: '/history-service',
          direct: 'forward',
          icon: 'document'
        },
        {
          title: 'Edit profile',
          url: '/edit-profile-swm',
          direct: 'forward',
          icon: 'md-hammer'
        },
        {
          title: 'App Settings',
          url: '/settings',
          direct: 'forward',
          icon: 'cog'
        }
      ];
    } else {
      this.appPages = [
        {
          title: 'Home',
          url: '/home-results',
          direct: 'root',
          icon: 'home'
        },
        {
          title: 'About',
          url: '/about',
          direct: 'forward',
          icon: 'information-circle-outline'
        },
        {
          title: 'App Settings',
          url: '/settings',
          direct: 'forward',
          icon: 'cog'
        },
        {
          title: 'Confirm Register',
          url: '/confirm-register',
          direct: 'forward',
          icon: 'person-add'
        },
        {
          title: 'Set service fees',
          url: '/set-service-fees',
          direct: 'forward',
          icon: 'book'
        }
      ];
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
