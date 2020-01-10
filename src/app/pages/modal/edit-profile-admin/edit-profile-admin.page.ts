import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-profile-admin',
  templateUrl: './edit-profile-admin.page.html',
  styleUrls: ['./edit-profile-admin.page.scss'],
})
export class EditProfileAdminPage implements OnInit {

  @Input() value: any;
  public image: any;

  constructor(
    private nav: NavController,
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.image = this.sanitizer.bypassSecurityTrustStyle(this.value);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
