import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  // { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  // { path: 'register-swm', loadChildren: './pages/register-swm/register-swm.module#RegisterSwmPageModule' },
  // { path: 'select-register', loadChildren: './pages/select-register/select-register.module#SelectRegisterPageModule' },
  // { path: 'profile-list', loadChildren: './pages/profile-list/profile-list.module#ProfileListPageModule' },
  // { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'register-user', loadChildren: './pages/register-user/register-user.module#RegisterUserPageModule' },
  { path: 'confirm-register', loadChildren: './pages/confirm-register/confirm-register.module#ConfirmRegisterPageModule' },
  { path: 'history-service', loadChildren: './pages/history-service/history-service.module#HistoryServicePageModule' },
  // { path: 'manage-user', loadChildren: './pages/manage-user/manage-user.module#ManageUserPageModule' },
  // { path: 'edit-profile-admin', loadChildren: './pages/modal/edit-profile-admin/edit-profile-admin.module#EditProfileAdminPageModule' },
  // { path: 'history-admin', loadChildren: './pages/history-admin/history-admin.module#HistoryAdminPageModule' },
  // { path: 'user-tab', loadChildren: './pages/tabs/user-tab/user-tab.module#UserTabPageModule' },
  // { path: 'admin-tab', loadChildren: './pages/tabs/admin-tab/admin-tab.module#AdminTabPageModule' },
  { path: 'edit-profile-swm', loadChildren: './pages/edit-profile-swm/edit-profile-swm.module#EditProfileSwmPageModule' },
  { path: 'set-service-fees', loadChildren: './pages/set-service-fees/set-service-fees.module#SetServiceFeesPageModule' },  { path: 'home-admin', loadChildren: './pages/home-admin/home-admin.module#HomeAdminPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
