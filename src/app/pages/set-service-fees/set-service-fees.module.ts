import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetServiceFeesPage } from './set-service-fees.page';

const routes: Routes = [
  {
    path: '',
    component: SetServiceFeesPage,
    children: [
      {
        path: 'service-fee',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../service-fee/service-fee.module').then(m => m.ServiceFeePageModule)
          }
        ]
      },
      {
        path: 'membership-fee',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../membership-fee/membership-fee.module').then(m => m.MembershipFeePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/set-service-fees/service-fee',
        pathMatch: 'full'
      }
    ]
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
export class SetServiceFeesPageModule {}
