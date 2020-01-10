import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoryAdminPage } from './history-admin.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryAdminPage,
    children: [
      {
        path: 'user-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/user-tab/user-tab.module').then(m => m.UserTabPageModule)
          }
        ]
      },
      {
        path: 'admin-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/admin-tab/admin-tab.module').then(m => m.AdminTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/history-admin/user-tab',
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
  declarations: [HistoryAdminPage]
})
export class HistoryAdminPageModule {}
