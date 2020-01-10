import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditProfileSwmPage } from './edit-profile-swm.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfileSwmPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditProfileSwmPage]
})
export class EditProfileSwmPageModule {}
