import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UserAdminComponent } from './components/user-admin/user-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'userAdmin', pathMatch: 'full' },
  { path: 'userAdmin', component: UserAdminComponent }
];

@NgModule({
  declarations: [UserAdminComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
