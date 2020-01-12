import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
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
        title: 'Dashboard',
        url: '/dashboard',
        direct: 'forward',
        icon: 'clipboard'
      },
      {
        title: 'Register (Admin Mode)',
        url: '/select-register',
        direct: 'forward',
        icon: 'people'
      },
      {
        title: 'Register (User Mode)',
        url: '/register-user',
        direct: 'forward',
        icon: 'person'
      },
      {
        title: 'Confirm Register',
        url: '/confirm-register',
        direct: 'forward',
        icon: 'person-add'
      },
      {
        title: 'Manage user',
        url: '/manage-user',
        direct: 'forward',
        icon: 'create'
      },
      {
        title: 'Profile list',
        url: '/profile-list',
        direct: 'forward',
        icon: 'list-box'
      },
      {
        title: 'History (User mode)',
        url: '/history-service',
        direct: 'forward',
        icon: 'document'
      },
      {
        title: 'History (Admin mode)',
        url: '/history-admin',
        direct: 'forward',
        icon: 'book'
      },
      {
        title: 'Edit profile (User mode)',
        url: '/edit-profile-swm',
        direct: 'forward',
        icon: 'book'
      },
      {
        title: 'Set service fees (Admin mode)',
        url: '/set-service-fees',
        direct: 'forward',
        icon: 'book'
      },
      {
        title: 'service fees (Admin mode)',
        url: '/service-fee',
        direct: 'forward',
        icon: 'book'
      }
    ];

    this.initializeApp();
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

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
