import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetServiceFeesPage } from './set-service-fees.page';

const routes: Routes = [
  {
    path: 'set-service-fees',
    component: SetServiceFeesPage,
    children: [
      { path: 'service-fee', loadChildren: './pages/register-user/register-user.module#RegisterUserPageModule' },
      { path: 'membership-fee', loadChildren: '../tab2/tab2.module#Tab2PageModule' },
    ]
  },
  {
    path:'',
    redirectTo:'/set-service-fees/register-user',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetServiceFeesPage]
})
export class SetServiceFeesPageModule { }
