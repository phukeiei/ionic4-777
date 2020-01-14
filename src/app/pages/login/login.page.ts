import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AppComponent } from "./../../app.component";

import { LoginService } from '../../services/login/login.service';
import { SessionService } from "../../services/session/session.service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { RegisterUserService } from "../../services/register-user/register-user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username = '';
  public password = '';
  public user_iden: any;

  public onLoginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private sessionService:SessionService,
    private appComponent:AppComponent,
    public personService :RegisterUserService,

    private router: Router
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    
    // if(this.sessionService.check()){
    //   // this.goToHome();
    //   console.log(this.sessionService.check());
    // }
    this.onLoginForm = this.formBuilder.group({
      'username': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  public login()
  {
    let checkUser = this.loginService.checkUser(this.username, this.password);
    checkUser.subscribe(result => {
      console.log(result.status)
      if (!result) {
        this.presentAlert();
      } else {
        this.user_iden = result;
        this.sessionService.setSession(
          this.username,
          this.password,
          this.user_iden.status,
          this.user_iden.id
        );
        this.sessionService.status = result.status
        console.log(result.status)
        this.appComponent.ck = result.status;

        this.personService.getPersonDataById(result.id).subscribe(res => {
          this.appComponent.accountName = res[0].full_name;
        });

        this.appComponent.ngOnInit()
        this.appComponent.initializeApp();
        this.sessionService.userId = result.id
        this.sessionService.username = this.username
        this.sessionService.reState = true;
        if(this.appComponent.ck=="1"){
          this.appComponent.status = "สมาชิก";
          this.navCtrl.navigateRoot('/home-results');
        }else if(this.appComponent.ck=="2"){
          this.appComponent.status = "ผู้ดูแลระบบ";
          this.navCtrl.navigateRoot('/home-admin');
        }else{
          this.navCtrl.navigateRoot('/erer');
        }
        // this.goToHome();
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'รหัสผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
      message: 'กรุณากรอกรหัสผู้ใช้และรหัสผ่านให้ถูกต้อง',
      buttons: ['OK']
    });

    await alert.present();
  }
  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'ลืมรหัสผ่าน?',
      message: 'ป้อนที่อยู่อีเมลของคุณเพื่อส่งรหัสผ่านลิงค์ เพื่อทำการรีเซ็ต',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'ตกลง',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'ส่งอีเมลเรียบร้อยแล้ว',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home-results');
  }

}
