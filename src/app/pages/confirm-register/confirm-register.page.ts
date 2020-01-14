import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
// import { MovieService, SearchType } from './../../services/movie.service';
import { ConfirmRegisterService } from "../../services/confirm-register/confirm-register.service";

@Component({
  selector: 'app-confirm-register',
  templateUrl: './confirm-register.page.html',
  styleUrls: ['./confirm-register.page.scss'],
})
export class ConfirmRegisterPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  // type: SearchType = SearchType.all;

  constructor(public actionSheetController: ActionSheetController,
              public navCtrl: NavController,
              public confirmRegisterService: ConfirmRegisterService) { }
  subscriberList: any = [];

  ngOnInit() {
    this.getUserListByStatusId(1);
  }

  searchChanged() {
    // Call our service function which returns an Observable
    // this.results = this.ConfirmRegisterService.searchData(this.searchTerm, this.type);
  }

  public getUserListByStatusId(id=null) {
    this.confirmRegisterService.getUserListByStatusId(id).subscribe(res => {
      this.subscriberList = res;
    });
  }

  public deleteById(id=null) {
    this.confirmRegisterService.deleteById(id).subscribe(res => {
      this.getUserListByStatusId(1);
    });
  }

  public updateStatusById(id=null, ssId=null) {
    this.confirmRegisterService.updateStatusById(id, ssId).subscribe(res => {
      this.getUserListByStatusId(1);
    });
  }

  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'ต้องการอนุมัติหรือไม่',
      buttons: [{
        text: 'อนุมัติ',
        icon: 'person-add',
        handler: () => {
          console.log('กดอนุมัติ');
          this.updateStatusById(id, 2);
        }
      }, {
        text: 'ไม่อนุมัติ',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('กดลบ');
          this.deleteById(id);
        }
      }, {
        text: 'ยกเลิก',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('กดยกเลิก');
        }
      }]
    });
    await actionSheet.present();
    await this.getUserListByStatusId(1);
  }

}
