import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoryServicePage } from './history-service.page';
import { ReactiveFormsModule } from "@angular/forms";
const routes: Routes = [
  {
    path: '',
    component: HistoryServicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [HistoryServicePage]
})
export class HistoryServicePageModule {}
